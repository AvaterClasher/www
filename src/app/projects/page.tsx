import { allProjects } from "contentlayer/generated";

import { ProjectCard } from "~/app/_components/quark/project-card";
import {
  FadeIn,
  FadeInStagger,
  AnimatePresence,
} from "~/app/_components/atom/fade-in";

type SearchParamsProps = {
  searchParams: {
    tag: string;
  };
};

export default function ProjectPage({ searchParams }: SearchParamsProps) {
  const { tag } = searchParams;
  let filteredProjects = tag
    ? allProjects.filter((project) => project.tag.includes(tag))
    : allProjects;

  return (
    <FadeInStagger
      className="grid gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      faster
    >
      <AnimatePresence mode="wait">
        {filteredProjects.map((project) => (
          <FadeIn
            layout
            key={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard data={project} />
          </FadeIn>
        ))}
      </AnimatePresence>
    </FadeInStagger>
  );
}
