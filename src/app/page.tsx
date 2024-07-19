import { FadeIn } from "./_components/atom/fade-in";
import { AnimatedName } from "./_components/quark/animated-name";

export default async function Home() {
  return (
    <main>
      <section className="flex items-center justify-center gap-20 p-5">
        <FadeIn>
          <div className="relative z-10 space-y-8">
            <header>
              <p className="text-lg font-extralight text-muted-foreground">
                Hi all. I am
              </p>
              <AnimatedName />
              <h2 className="text-base text-muted-foreground sm:text-xl md:text-2xl">
                <span className="animate-pulse">&gt;</span>
                Developer
              </h2>
              <div className="absolute left-0 top-0 -z-10 h-1/2 w-full animate-pulse rounded-full bg-muted-foreground/10 blur-2xl"></div>
            </header>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-muted-foreground">{`// you can also see it on my Github page`}</p>
              <p className="text-muted-foreground">
                <span className="text-purple">const</span>{" "}
                <span className="text-green">githubLink</span> ={" "}
                <a
                  target="_blank"
                  href="https://github.com/AvaterClasher/portfolio"
                  className="text-light-brown transition-colors hover:text-foreground hover:underline"
                  data-umami-event="GitHub link"
                >
                  &apos;https://github.com/AvaterClasher/www&apos;
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
