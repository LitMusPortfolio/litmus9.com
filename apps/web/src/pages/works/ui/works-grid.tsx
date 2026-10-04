import { useAtomValue } from "@effect/atom-react";
import { getRouteApi } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { worksFilterAtom } from "#/pages/works/model/filter";

import { WorkCard } from "./work-card";

const route = getRouteApi("/_site/works");

const WorksGrid = (): ReactNode => {
  const filter = useAtomValue(worksFilterAtom);
  const works = route.useLoaderData();
  return (
    <div className="card-grid">
      {works
        .filter((work) => filter === "all" || work.categories.includes(filter))
        .map((work) => (
          <WorkCard key={`${work.title}-${work.link}`} work={work} />
        ))}
    </div>
  );
};

export { WorksGrid };
