import { Suspense } from "react";
import { SiTypescript, SiRust } from "react-icons/si";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/accordion";
import { AsideLink } from "~/app/_components/atom/aside-link";
import { FadeInStagger, FadeIn } from "~/app/_components/atom/fade-in";

const allAbouts = [
  {
    title: "personal.rs",
  },
  {
    title: "links.ts",
  },
];

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid h-full grid-cols-12 overflow-hidden">
      <aside className="border-lines hidden overflow-y-auto border-r md:col-span-3 md:block lg:col-span-2">
        <Accordion type="single" collapsible defaultValue="about">
          <AccordionItem value={"about"} defaultChecked>
            <AccordionTrigger className="border-lines border-b px-5 py-2.5 text-left">
              About Me
            </AccordionTrigger>
            <AccordionContent className="mt-5 space-y-1">
              <FadeInStagger faster>
                {allAbouts.map(({ title }) => (
                  <FadeIn key={title}>
                    <Suspense fallback={<>Loading...</>}>
                      <AsideLink
                        href={title}
                        key={title}
                        startWith="/about"
                        title={title}
                      >
                        {title === "personal.rs" ? (
                          <SiRust className="h-4 w-4 shrink-0" />
                        ) : (
                          <SiTypescript className="h-4 w-4 shrink-0" />
                        )}
                        {title}
                      </AsideLink>
                    </Suspense>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <section className="relative col-span-12 h-[84dvh] overflow-y-auto md:col-span-9 md:h-auto lg:col-span-10">
        {children}
      </section>
    </section>
  );
}
