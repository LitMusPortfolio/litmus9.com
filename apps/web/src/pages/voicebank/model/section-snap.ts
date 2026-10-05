import { make } from "effect/unstable/reactivity/Atom";
import Lenis from "lenis";
import Snap from "lenis/snap";

type SectionSnap = Readonly<{ status: "native" }> | Readonly<{ status: "eased" }>;

type Span = Readonly<{ top: number; height: number }>;

const FINE_POINTER = "(pointer: fine)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const SCROLL_LOCK = "scrollLocked";
const ROOT_ID = "voicebank";
const SECTION_SELECTOR = "#main, #character, #downloads, #rules";
const PAGE_STEP = 0.8;
const MIN_GAP = 0.25;
const SNAP_SECONDS = 1;
const SNAP_DEBOUNCE_MS = 150;
const SNAP_REACH = "200%";
const EASE_POWER = 3;
const WHOLE = 1;
const NONE = 0;
const PREVIOUS = 1;

const easeOutCubic = (progress: number): number => WHOLE - (WHOLE - progress) ** EASE_POWER;

const pagesOf = (span: Span, viewport: number): readonly number[] => {
  const end = span.top + span.height - viewport;
  const steps = Math.max(Math.ceil((end - span.top) / (viewport * PAGE_STEP)), NONE);
  return [
    ...Array.from({ length: steps }, (_step, index) => span.top + index * viewport * PAGE_STEP),
    Math.max(end, span.top),
  ];
};

const pointsOf = (spans: readonly Span[], viewport: number, limit: number): readonly number[] =>
  [...spans.flatMap((span) => pagesOf(span, viewport)), limit]
    .map((point) => Math.round(Math.min(point, limit)))
    .toSorted((left, right) => left - right)
    .filter(
      (point, index, all) =>
        index === NONE || point - (all[index - PREVIOUS] ?? point) > viewport * MIN_GAP,
    );

const placer = (
  add: (point: number) => () => void,
  measure: () => readonly number[],
): (() => void) => {
  let removers: readonly (() => void)[] = [];
  return () => {
    for (const remove of removers) {
      remove();
    }
    removers = measure().map((point) => add(point));
  };
};

const sectionSnapAtom = make<SectionSnap>((get) => {
  const root = document.querySelector(`#${ROOT_ID}`);
  if (
    root === null ||
    !globalThis.matchMedia(FINE_POINTER).matches ||
    globalThis.matchMedia(REDUCED_MOTION).matches
  ) {
    return { status: "native" };
  }
  const lenis = new Lenis({
    autoRaf: true,
    virtualScroll: (): boolean => !(SCROLL_LOCK in document.body.dataset),
  });
  const snap = new Snap(lenis, {
    type: "lock",
    duration: SNAP_SECONDS,
    easing: easeOutCubic,
    debounce: SNAP_DEBOUNCE_MS,
    distanceThreshold: SNAP_REACH,
  });
  const place = placer(
    (point) => snap.add(point),
    () =>
      pointsOf(
        Array.from(root.querySelectorAll(SECTION_SELECTOR), (section) => {
          const { top, height } = section.getBoundingClientRect();
          return { top: top + globalThis.scrollY, height };
        }),
        globalThis.innerHeight,
        document.documentElement.scrollHeight - globalThis.innerHeight,
      ),
  );
  const observer = new ResizeObserver(place);
  observer.observe(root);
  get.addFinalizer(() => {
    observer.disconnect();
    snap.destroy();
    lenis.destroy();
  });
  return { status: "eased" };
});

export { sectionSnapAtom };
