import LineHoriz from "../shared/LineHoriz";

export default function Experience() {
  return (
    <section className="container-space md:mb-[150px] mb-[100px]">
      <div className="md:mb-[40px] mb-[25px]  tech-container">
        <span className="invisible flex">0</span>
        <h1 className="stroke-heading  md:w-1/2">
          <span className="stroke-text stroke">03.</span>
          <span className="md:text-[60px] text-[40px]">Experience</span>
        </h1>
      </div>
      <LineHoriz />

      <div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title text-[18px] mb-[5px] md:mb-0 ">
              Arceptive{" "}
            </h2>
            <div className="flex flex-col md:w-[50%] ">
              <h2 className="md:text-[26px] text-[16px] mb-[10px] md:mb-0 font-semibold ">
                Frontend Engineer{" "}
              </h2>
              <p
                className="md:text-[22px] text-gray5  text-[14px] md:pr-[20px]"
                aria-label="Ejiro Asiuwhu Programming Languages"
              >
                September 2021 &#8212; Present
              </p>
            </div>
          </div>
          <LineHoriz />
        </div>
      </div>
    </section>
  );
}
