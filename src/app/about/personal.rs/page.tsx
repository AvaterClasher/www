import Age  from "~/app/_components/atom/age-counter";

export default function Page() {
  return (
    <>
      <div className="text-sm">
        <div className="ml-4 mt-4 flex gap-x-5">
          <div className="text-muted-foreground">1</div>
          <div>
            <span className="text-red-400">const</span>{" "}
            <span className="text-blue-300">name</span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">"SOUMYADIP MONI"</span>
          </div>
        </div>
        <div className="ml-4 mt-1 flex gap-x-5">
          <div className="text-muted-foreground">2</div>
        </div>
        <div className="ml-4 mt-1 flex gap-x-5">
          <div className="text-muted-foreground">3</div>
          <div className="flex gap-x-3">
            <span className="text-red-400">let</span>{" "}
            <span className="text-blue-300">age</span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300"><Age/></span>
          </div>
        </div>
        <div className="ml-4 mt-1 flex gap-x-5">
          <div className="text-muted-foreground">4</div>
        </div>
        <div className="ml-4 mt-1 flex gap-x-5">
          <div className="text-muted-foreground">5</div>
          <div>
            <span className="text-red-400">let</span>{" "}
            <span className="text-blue-300">current_location</span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">"Bhubaneswar, India"</span>
          </div>
        </div>
        <div className="ml-4 mt-1 flex gap-x-5">
          <div className="text-muted-foreground">6</div>
        </div>
        <div className="ml-4 mt-1 flex gap-x-5">
          <div className="text-muted-foreground">7</div>
          <div>
            <span className="text-red-400">let</span>{" "}
            <span className="text-blue-300">about_me</span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">
              r#"Most of the things you want to know about me (maybe??) I am
              soumyadip (also called moni) aka{" "}
              <a
                href="https://github.com/AvaterClasher"
                className="underline decoration-red-400 decoration-wavy underline-offset-[3px] "
              >
                AvaterClasher
              </a>{" "}
              on the web. I'm a 20 y/o student, a self taught programmer, and a
              web developer. I also use Arch, Rust and a ton of other things
              BTW. In fact the way this text has been written is in the{" "}
              <a
                href="https://doc.rust-lang.org/reference/tokens.html#raw-string-literals"
                className="underline decoration-red-400 decoration-wavy underline-offset-[3px] "
              >
                raw string literal
              </a>{" "}
              format of rust. Other than coding I like to play games and read
              light novels. I love RPG's the game I currently play the most is{" "}
              <a
                href="https://pathofexile.com/"
                className="underline decoration-red-400 decoration-wavy underline-offset-[3px] "
              >
                Path Of Exile
              </a>
              . I dont talk much anywhere else. If you have any questions or
              comments, please feel free to reach out to me on any one of{" "}
              <a
                href="/about/links.ts"
                className="underline decoration-red-400 decoration-wavy underline-offset-[3px] "
              >
                social links here
              </a>
              . Thanks for reading!"#
            </span>
          </div>
        </div>
        <div className="ml-4 mt-1 flex gap-x-5">
          <div className="text-muted-foreground/30">8</div>
        </div>
      </div>
    </>
  );
}
