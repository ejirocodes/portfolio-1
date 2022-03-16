import React from "react";

export default function WorkCard() {
  return (
    <section className="relative bg-[#FBFBFB] md:w-1/2 md:px-[100px] md:py-[100px]  ">
      <h1 className="mb-[12px] md:text-[36px] font-bold text-[24px] ">
        I build cool & amazing stuffs for the internet
      </h1>
      <p className="text-[14px] md:text-[22px] md:mb-[60px] mb-[40px] ">
        Open source projects, web apps, mobile app and experimentals.
      </p>
      <div className="md:text-center text-left mt-[50px] md:mt-[120px] ">
        <button className=" btn10 hover-main group border border-solid border-gray2 text-white bg-dark hover:text-dark hover:bg-white inline-flex items-center justify-center font-bold text-[14px] md:text-[19px] py-[28px] md:w-[305px] w-[210px] mx-auto">
          <span className="mr-[12px]">See my work</span>
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
      <span className="absolute top-[53px] right-[58px]">
        <svg
          width="22"
          height="32"
          viewBox="0 0 22 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5468 13.7325L14.8078 0.16333L0.483398 18.2608H9.53214L7.27114 31.83L21.5971 13.7325H12.5468Z"
            fill="#222222"
          />
        </svg>
      </span>
    </section>
  );
}
