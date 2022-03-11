import React from "react";

export const ProjectCard = () => {
  return (
    <figure className="h-full w-[432px] text-dark shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] drop-shadow-[0_25.8016px_49.9387px_-2.49693px_rgba(0, 0, 0, 0.1)]">
      <div className="bg-dark py-[140px]  flex items-center justify-center">
        <img src="/img/spasora.svg" alt="Spasora" />
      </div>
      <div className="p-[32px] border-b border-gray3">
        <figcaption className="text-[21px] uppercase mb-[11px] font-bold">
          Spasora
        </figcaption>
        <p className="text-[15px] leading-[23px]">
          Spasora is a versatile marketplace to discover and book physical
          spaces for video production, photography, shortlet apartments, social
          events & more.
        </p>
      </div>
      <footer className="flex items-center justify-between  h-[62px] pl-[34px]">
        <button className="flex items-center  ">
          <span className="mr-[10px]">
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.68661 0.865845C13.5539 0.865845 16.3351 6.42841 16.3351 6.42841C16.3351 6.42841 13.5539 11.991 8.68661 11.991C3.81937 11.991 1.03809 6.42841 1.03809 6.42841C1.03809 6.42841 3.81937 0.865845 8.68661 0.865845ZM8.68661 4.34245C7.53457 4.34245 6.60065 5.27637 6.60065 6.42841C6.60065 7.58046 7.53457 8.51437 8.68661 8.51437C9.83866 8.51437 10.7726 7.58046 10.7726 6.42841C10.7726 5.27637 9.83866 4.34245 8.68661 4.34245Z"
                stroke="#111111"
                strokeWidth="1.14728"
                strokeLinecap="square"
              />
            </svg>
          </span>
          <span className="text-[14px] font-semibold">Live</span>
        </button>
        <div className="px-[40px] border-l border-gray3 h-full flex items-center justify-center">
          <svg
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.83722 6.56994L7.82767 0.625854L1.55273 8.55362H5.51662L4.52617 14.4977L10.8018 6.56994H6.83722Z"
              fill="#999999"
              stroke="#999999"
              strokeWidth="0.832311"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </footer>
    </figure>
  );
};
