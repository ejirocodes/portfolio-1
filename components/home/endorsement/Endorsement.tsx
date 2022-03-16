import React from "react";
import LineHoriz from "../../shared/LineHoriz";
import EndorsementCard from "./EndorsementCard";
import Marquee from "react-fast-marquee";

const Endorsement = () => {
  const endorsements = [
    {
      body: `Ejiro is highly skilled, detail oriented Front-end Engineer. As a Full stack developer, I learnt a lot about accessibility and user experience on the Front End from Ejiro. He has always been an advocate for accessibility. Ejiro is your go to guy if you need someone to build a scalable Front End application with Engineering best practices in mind.`,
      name: "Faithful Ojebiyi",
      position: "Fullstack Engineer",
    },
    {
      body: `Ejiro is a very talented developer. He goes above and beyond with his projects, his teamwork, and leadership. He is constantly working on his skills, while also helping to bring up others around them. 
He has great knowledge of front-end development, he delivered complex stories with a ...`,
      name: "Godstime Obasi",
      position: "Web3 / Solidity Developer",
    },
    {
      body: `Ejiro and I have worked together on a number of projects, and I have
        really enjoyed working with him. He is a highly decorated software
        developer with experience in building scalable systems. I highly
        recommend him!`,
      name: "Kenneth Jimmy",
      position: "Fullstack Developer + Devops",
    },
    {
      body: `Ejiro’s ability to handle multiple projects was unlike any I’ve seen before and helped in the productivity level of our  company. He is very reliable and very committed. As a team member or a leader, Ejiro earns my highest recommendation ever.`,
      name: "Miguel Ángel González Martínez",
      position: "Software Engineer",
    },
    {
      body: `Ejiro is a talented software engineer and frontend developer with vast understanding of React.js, vue.js. Working with him at the tech4dev project was a great experience and I will recommend him.`,
      name: "Benedict Ama",
      position: "Software Engineer",
    },
    {
      body: `Ejiro is an experienced, versatile, and detailed frontend developer who approaches every project from a creative perspective. Ejiro has made a high increase in the productivity level of the company`,
      name: "Ijeoma Okoh",
      position: "Product Manager",
    },
    {
      body: `Ejiro knows his craft and owns it. It’s nice to work with a professional that is self-aware in his field. If you’re looking for a skilled developer to build a high-end interactive application, then Ejiro is your best deal!`,
      name: "Rebecca Udom",
      position: "Project Management",
    },
  ];
  return (
    <section className="md:mb-[150px] mb-[100px]">
      <div className="md:mb-[40px] mb-[25px] items-start tech-container">
        <h1 className="stroke-heading  md:w-1/2">
          <span className="stroke-text stroke">04.</span>
          <span className="md:text-[60px] text-[40px]">Endorsement</span>
        </h1>
      </div>
      <LineHoriz />
      <section className="md:mt-[60px] mt-[30px]">
        <Marquee pauseOnHover={true} gradient={false} speed={50}>
          {endorsements.map((endorsement) => (
            <div className="md:mr-[30px] mr-[10px]" key={endorsement.body}>
              <EndorsementCard endorsement={endorsement} />
            </div>
          ))}
        </Marquee>
      </section>
    </section>
  );
};

export default Endorsement;
