const PAGES = [
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/voicebank", label: "Voicebank" },
] as const;
const CONTACT = { to: "/contact", label: "Contact" } as const;

export { CONTACT, PAGES };
