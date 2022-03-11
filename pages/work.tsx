import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Newsletter from "../components/article/Newsletter";
import { ProjectCard } from "../components/project/ProjectCard";

const Work = () => {
  return (
    <section className="pt-[172px]">
      <header className="text-center text-dark pb-[48px] ">
        <h1 className="text-[60px] leading-none mb-[12px] font-extrabold">
          /Work
        </h1>
        <p className="text-[22px]">
          I have written a billion line of code, hahaha... just kidding but{" "}
          <br /> me trust I have built great stuffs
        </p>
      </header>
      <section>
        <Tabs>
          <div className="border-t border-gray3 py-[40px] border-b text-center">
            <TabList className="tabs_main_list">
              <Tab>All</Tab>
              <Tab>Projects</Tab>
              <Tab>Open Source</Tab>
            </TabList>
          </div>

          <TabPanel>
            <ProjectCard />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
      <section className="mt-[210px]">
        <Newsletter />
      </section>
    </section>
  );
};

export default Work;
