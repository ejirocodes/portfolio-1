import React from "react";
import LineHoriz from "../../shared/LineHoriz";
import WorkCard from "./WorkCard";

export default function work() {
  return (
    <section className="md:mb-[150px] mb-[100px] container-space">
      <div className="md:mb-[40px] mb-[25px] items-start tech-container">
        <h1 className="stroke-heading">
          <span className="stroke-text stroke">05.</span>
          <span className="md:text-[60px] text-[40px]">What I love doing</span>
        </h1>
      </div>
      <LineHoriz />
      <div className="mt-[60px]">
        <WorkCard />
      </div>
    </section>
  );
}
