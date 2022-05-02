import React from "react";
import LineHoriz from "../../shared/LineHoriz";
import WorkCard from "./WorkCard";

export default function work() {
  const items = [
    {
      title: "I build cool & amazing stuffs for the internet",
      lead: " Open source projects, web apps, mobile app and experimentals.",
      link: "/work",
      linkText: "See my work",
      isWork: true,
    },
    {
      title: "I author meaningful content regularly",
      lead: "I write about Software Development, Tech, Career Tips, and Lifestyle.",
      link: "/articles",
      linkText: "Read my articles",
      isWork: false,
    },
  ];
  return (
    <section className="container-mb container-space contain-main">
      <div className="md:mb-[40px] mb-[25px] items-start tech-container">
        <h1 className="stroke-heading">
          <span className="stroke-text stroke">05.</span>
          <span className="md:text-[60px] text-[40px]">What I love doing</span>
        </h1>
      </div>
      <LineHoriz />
      <div className="mt-[60px] lg:h-[550px] flex items-center md:flex-row flex-col">
        {items.map((item) => (
          <div
            className=" md:mr-[20px] h-full md:mb-0 md:odd:mb-0 odd:mb-[30px] w-full min-h-full md:p-[0.5em]"
            key={item.title}
          >
            <WorkCard work={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
