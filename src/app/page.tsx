import { FadeIn } from "./_components/atom/fade-in";
import { AnimatedName } from "./_components/quark/animated-name";
import { GridPattern } from "./_components/quark/grid-pattern";

export default function Home() {
  return (
    <section className="flex items-center justify-center gap-20 p-5">
      <FadeIn>
        <div className="relative z-10 space-y-8 md:space-y-10">
          <header>
            <p className="text-lg font-extralight text-muted-foreground">
              Hi all. I am
            </p>
            <AnimatedName />
            <h2 className="text-base text-muted-foreground sm:text-xl md:text-2xl">
              <span className="animate-pulse">&gt; </span>
              Developer
            </h2>

            <div className="absolute left-0 top-0 -z-10 h-1/2 w-full animate-pulse rounded-full bg-muted-foreground/10 blur-2xl" />
          </header>

          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-muted-foreground">{`// you can also see it on my Github page`}</p>
            <p className="text-muted-foreground">
              <span className="text-purple">const</span>{" "}
              <span className="text-green">githubLink</span> ={" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/AvaterClasher/www"
                className="text-light-brown transition-colors hover:text-foreground "
              >
                &apos;<span className="hover:underline decoration-wavy decoration-green-300 underline-offset-4">https://github.com/AvaterClasher/www</span>&apos;
              </a>
            </p>
          </div>
        </div>
      </FadeIn>
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-full w-full fill-neutral-100 stroke-neutral-700/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] dark:fill-secondary/20 dark:stroke-secondary/30"
        yOffset={-96}
        interactive
      />
    </section>
  );
}
