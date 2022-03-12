import Link from "next/link";
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
        <div className="flex items-center justify-center md:mt-[170px] ">
          <Link href="/articles">
            <a className="inline-flex items-center group">
              <span
                className="mr-[18px] text-[32px] relative font-bold after:absolute after:h-[2px] after:w-full after:bottom-[-4px] after:left-0 after:bg-dark after:transition-all 
              after:duration-500 after:hover:w-0 
              "
              >
                View my articles
              </span>
              <span className="group-hover:translate-x-2 transition-all duration-300 ease-[cubic-bezier(.32,2,.55,.27)]">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.44449 2.28287L14.0478 8.88614L7.2168 15.7171M14.0478 8.88614L0.613531 9.11384L14.0478 8.88614Z"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </a>
          </Link>
        </div>
      </section>
      <section className="mt-[210px]">
        <Newsletter />
      </section>
    </section>
  );
};

export default Work;
