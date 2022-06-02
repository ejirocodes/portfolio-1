import { useState } from "react";
import LineHoriz from "../../shared/LineHoriz";
import WorkCard from "./WorkCard";

export interface IState {
  niche: {
    title: string;
    lead: string;
    link: string;
    linkText: string;
    isWork: boolean;
  };
}

const Work = () => {
  const [niche, _] = useState<IState["niche"][]>([
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
  ]);

  const customCard = () => {
    return (
      <div className="mt-[60px] lg:h-[550px] flex items-center md:flex-row flex-col">
        {niche.map((nich) => (
          <div
            className=" md:mr-[20px] h-full md:mb-0 md:odd:mb-0 odd:mb-[30px] w-full min-h-full md:p-[0.5em]"
            key={nich.title}
          >
            <WorkCard niche={nich} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="container-mb container-space contain-main">
      <div className="md:mb-[40px] mb-[25px] items-start tech-container">
        <h1 className="stroke-heading">
          <span className="stroke-text stroke">05.</span>
          <span className="md:text-[60px] text-[40px]">What I love doing</span>
        </h1>
      </div>
      <LineHoriz />
      {customCard()}
    </section>
  );
};

export default Work;
