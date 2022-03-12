import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Newsletter from "../components/article/Newsletter";
import { ProjectCard } from "../components/project/ProjectCard";
import { projects } from "../data/projects";

const Work = () => {
  return (
    <section className="pt-[172px]">
      <header className="text-center text-dark pb-[48px] ">
        <h1 className="text-[60px] leading-none mb-[12px] font-extrabold">
          /Work
        </h1>
        <p className="text-[22px]">
          I have written over a billion lines of code, hahaha... just kidding,
          <br /> But trust me, I&apos;ve built awesome products that I
          can&apos;t show you cos of NDA 👀
        </p>
      </header>
      <section>
        <Tabs>
          <div className="border-t border-gray3 py-[20px] border-b text-center">
            <TabList className="tabs_main_list">
              <Tab>All</Tab>
              <Tab>Projects</Tab>
              <Tab>Open Source</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="project-card">
              {projects.map((project) => (
                <div key={project.title} className="mr-[20px]">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="project-card">
              {projects
                .filter((project) => project.type === "project")
                .map((project) => (
                  <ProjectCard project={project} key={project.title} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="project-card">
              {projects
                .filter((project) => project.type === "open")
                .map((project) => (
                  <ProjectCard project={project} key={project.title} />
                ))}
            </div>
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
