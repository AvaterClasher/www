export default function AboutPage() {
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
          <div>
            <span className="text-red-400">let</span>{" "}
            <span className="text-blue-300">location</span>{" "}
            <span className="text-red-400"> =</span>{" "}
            <span className="text-blue-300">"Bhubaneswar, India"</span>
          </div>
        </div>
      </div>
    </>
  );
}
