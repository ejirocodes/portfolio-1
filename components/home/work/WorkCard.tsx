import React from "react";

export default function WorkCard() {
  return (
    <section className="relative bg-[#FBFBFB]">
      <h1 className="md:mb-[12px]">
        I build cool & amazing stuffs for the internet
      </h1>
      <p>Open source projects, web apps, mobile app and experimentals.</p>
      <span>
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
