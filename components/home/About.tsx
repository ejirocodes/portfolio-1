import React from "react";
import LineHoriz from "../shared/LineHoriz";

export default function About() {
  return (
    <section className="container-space my-[40px]">
      <div className="md:mb-[40px] mb-[25px]">
        <h1 className="font-NeueMachina font-extrabold flex md:items-center leading-none flex-col md:flex-row">
          <span className="md:text-[110px] text-[50px] stroke-text stroke-text md:mr-[32px] md:mb-0 mb-[8px]">
            01.
          </span>
          <span className="md:text-[60px] text-[40px]">About me</span>
        </h1>
      </div>
      <LineHoriz />
      <section
        className="grid grid-rows-1 md:gap-y-10 gap-y-[30px] gap-x-0 md:gap-x-[60px] md:grid-cols-2 grid-cols-1 md:grid-rows-2
      md:text-xl
      text-sm
      md:leading-[40px]
      leading-[24px]
      md:mt-[40px]
      mt-[30px]
      "
      >
        <p>
          I&apos;ve built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with focus on fast, elegant and accessible user experiences.
        </p>
        <p>
          Before now, I was Principal Frontend Engineer at hellotax, where I
          worked on a suite of tools and services tailored at providing fast,
          automated VAT Registration / filings and Returns solutions for
          multi-channel sellers across Europe.
        </p>
        <p>
          I&apos;ve built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with focus on fast, elegant and accessible user experiences.
        </p>
        <p>
          I&apos;ve built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with focus on fast, elegant and accessible user experiences.{" "}
        </p>
      </section>
    </section>
  );
}
