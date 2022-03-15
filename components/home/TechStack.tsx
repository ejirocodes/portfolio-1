import LineHoriz from "../shared/LineHoriz";

export default function TechStack() {
  return (
    <section className="container-space md:my-[150px] my-[100px]">
      <div className="md:mb-[40px] mb-[25px]">
        <span className="invisible">0</span>
        <h1 className="stroke-heading">
          <span className="stroke-text stroke">02.</span>
          <span className="md:text-[60px] text-[40px]">Tech Stack</span>
        </h1>
      </div>
      <LineHoriz />

      <div>
        <div className="">
          <div className="md:my-[40px]  my-[20px] flex justify-center md:items-center md:flex-row flex-col">
            <h2 className="md:text-[30px] text-[18px] font-extrabold md:mr-[132px]">
              Languages
            </h2>
            <p
              className="md:text-[22px]  text-[14px]"
              aria-label="Ejiro Asiuwhu Programming Languages"
            >
              JavaScript(ES6+), TypeScript, HTML 5, CSS 3, SASS, Node.js,
              GraphQL.{" "}
            </p>
          </div>
          <LineHoriz />
        </div>
      </div>
    </section>
  );
}
