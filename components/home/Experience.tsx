import LineHoriz from "../shared/LineHoriz";

export default function Experience() {
  return (
    <section className="container-space container-mb">
      <div className="md:mb-[40px] mb-[25px]  tech-container">
        <span className="invisible flex">0</span>
        <h1 className="stroke-heading w-full  xl:w-1/2">
          <span className="stroke-text stroke">03.</span>
          <span className="md:text-[60px] text-[40px]">Experience</span>
        </h1>
      </div>
      <LineHoriz />

      <div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title md:text-[30px] text-[18px] mb-[5px] md:mb-0 ">
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
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title md:text-[30px] text-[18px] mb-[5px] md:mb-0 ">
              Spasora{" "}
            </h2>
            <div className="flex flex-col md:w-[50%] ">
              <h2 className="md:text-[26px] text-[16px] mb-[10px] md:mb-0 font-semibold ">
                Lead Frontend Engineer · Part-time
              </h2>
              <p
                className="md:text-[22px] text-gray5  text-[14px] md:pr-[20px]"
                aria-label="Ejiro Asiuwhu Programming Languages"
              >
                November 2020 &#8212; Present
              </p>
            </div>
          </div>
          <LineHoriz />
        </div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title md:text-[30px] text-[18px] mb-[5px] md:mb-0 ">
              Bizvento{" "}
            </h2>
            <div className="flex flex-col md:w-[50%] ">
              <h2 className="md:text-[26px] text-[16px] mb-[10px] md:mb-0 font-semibold ">
                Frontend / Mobile App Developer
              </h2>
              <p
                className="md:text-[22px] text-gray5  text-[14px] md:pr-[20px]"
                aria-label="Ejiro Asiuwhu Programming Languages"
              >
                October 2021 &#8212; Present
              </p>
            </div>
          </div>
          <LineHoriz />
        </div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title md:text-[30px] text-[18px] mb-[5px] md:mb-0 ">
              LogRocket{" "}
            </h2>
            <div className="flex flex-col md:w-[50%] ">
              <h2 className="md:text-[26px] text-[16px] mb-[10px] md:mb-0 font-semibold ">
                Technical Writer · Freelance
              </h2>
              <p
                className="md:text-[22px] text-gray5  text-[14px] md:pr-[20px]"
                aria-label="Ejiro Asiuwhu Programming Languages"
              >
                November 2020 &#8212; Present
              </p>
            </div>
          </div>
          <LineHoriz />
        </div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title md:text-[30px] text-[18px] mb-[5px] md:mb-0 ">
              Strapi{" "}
            </h2>
            <div className="flex flex-col md:w-[50%] ">
              <h2 className="md:text-[26px] text-[16px] mb-[10px] md:mb-0 font-semibold ">
                Technical Writer · Freelance
              </h2>
              <p
                className="md:text-[22px] text-gray5  text-[14px] md:pr-[20px]"
                aria-label="Ejiro Asiuwhu Programming Languages"
              >
                July 2021 &#8212; Present
              </p>
            </div>
          </div>
          <LineHoriz />
        </div>
        <div className="">
          <div className="tech-container">
            <h2 className="tech-title md:text-[30px] text-[18px] mb-[5px] md:mb-0 ">
              Smashing Mag.{" "}
            </h2>
            <div className="flex flex-col md:w-[50%] ">
              <h2 className="md:text-[26px] text-[16px] mb-[10px] md:mb-0 font-semibold ">
                Technical Writer · Freelance
              </h2>
              <p
                className="md:text-[22px] text-gray5  text-[14px] md:pr-[20px]"
                aria-label="Ejiro Asiuwhu Programming Languages"
              >
                July &#8212; September 2021
              </p>
            </div>
          </div>
        </div>
        <div className="md:text-center text-left mt-[50px] md:mt-[120px] ">
          <button className=" btn10 hover-main group border border-solid border-gray2 text-white bg-dark md:px-[50px] hover:text-dark hover:bg-white inline-flex items-center 
          justify-center font-bold md:text-[22px] text[14px] md:py-[32px] py-[15px] px-[20px] ">
            <span className="mr-[12px]">Download Résumé</span>
            <span>
              <svg
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-[#111] transition-all"
                  d="M9.26717 7.82993L7.51275 1.28236L0.965173 3.03678M7.51275 1.28236L1.48828 11.717L7.51275 1.28236Z"
                  stroke="#ffffff"
                  strokeWidth="1.44609"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
