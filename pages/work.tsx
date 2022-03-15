import Link from "next/link";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Tab, TabList, TabPanel } from "react-tabs";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
); // disable ssr

import "react-tabs/style/react-tabs.css";
import Newsletter from "../components/article/Newsletter";
import { ProjectCard } from "../components/project/ProjectCard";
import { projects } from "../data/projects";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";

const Work = () => {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger, Draggable);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Draggable);

    let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

    // set initial state of items
    gsap.set(".project-card figure", { xPercent: 400, opacity: 1, scale: 0 });

    const spacing = 0.1, // spacing of the cards (stagger)
      snapTime = gsap.utils.snap(spacing), // we'll use this to snapTime the playhead on the seamlessLoop
      cards = gsap.utils.toArray(".project-card figure");

    const animateFunc = (element: any) => {
      const tl = gsap.timeline();
      tl.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.in",
          immediateRender: false,
        }
      ).fromTo(
        element,
        { xPercent: 400 },
        { xPercent: -400, duration: 1, ease: "none", immediateRender: false },
        0
      );
      return tl;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
      playhead = { offset: 0 }, // a proxy object we use to simulate the playhead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.
      wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()),
      scrub = gsap.to(playhead, {
        // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
        offset: 0,
        onUpdate() {
          seamlessLoop.time(wrapTime(playhead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
        },
        duration: 0.5,
        ease: "power3",
        paused: true,
      });
    // ,
    // trigger = ScrollTrigger.create({
    //   start: 0,
    //   onUpdate(self) {
    //     let scroll = self.scroll();
    //     if (scroll > self.end - 1) {
    //       wrap(1, 1);
    //     } else if (scroll < 1 && self.direction < 0) {
    //       wrap(-1, self.end - 1);
    //     } else {
    //       scrub.vars.offset =
    //         (iteration + self.progress) * seamlessLoop.duration();
    //       scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
    //     }
    //   },
    //   end: "+=3000",
    //   pin: ".gallery",
    // }),
    // converts a progress value (0-1, but could go outside those bounds when wrapping) into a "safe" scroll value that's at least 1 away from the start or end because we reserve those for sensing when the user scrolls ALL the way up or down, to wrap.
    // progressToScroll = (progress) =>
    //   gsap.utils.clamp(
    //     1,
    //     trigger.end - 1,
    //     gsap.utils.wrap(0, 1, progress) * trigger.end
    //   ),
    // wrap = (iterationDelta, scrollTo) => {
    //   iteration += iterationDelta;
    //   trigger.scroll(scrollTo);
    //   trigger.update(); // by default, when we trigger.scroll(), it waits 1 tick to update().
    // };

    // when the user stops scrolling, snap to the closest item.
    // ScrollTrigger.addEventListener("scrollEnd", () =>
    //   scrollToOffset(scrub.vars.offset)
    // );

    // feed in an offset (like a time on the seamlessLoop timeline, but it can exceed 0 and duration() in either direction; it'll wrap) and it'll set the scroll position accordingly. That'll call the onUpdate() on the trigger if there's a change.
    function scrollToOffset(offset) {
      // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
      let snappedTime = snapTime(offset),
        progress =
          (snappedTime - seamlessLoop.duration() * iteration) /
          seamlessLoop.duration();
      // scroll = progressToScroll(progress);
      // if (progress >= 1 || progress < 0) {
      //   return wrap(Math.floor(progress), scroll);
      // }
      // trigger.scroll(scroll);
    }

    // document
    //   .querySelector(".next")
    //   .addEventListener("click", () =>
    //     scrollToOffset(scrub.vars.offset + spacing)
    //   );
    // document
    //   .querySelector(".prev")
    //   .addEventListener("click", () =>
    //     scrollToOffset(scrub.vars.offset - spacing)
    //   );

    function buildSeamlessLoop(items, spacing, animateFunc) {
      let rawSequence = gsap.timeline({ paused: true }), // this is where all the "real" animations live
        seamlessLoop = gsap.timeline({
          // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
          paused: true,
          repeat: -1, // to accommodate infinite scrolling/looping
          onRepeat() {
            // works around a super rare edge case bug that's fixed GSAP 3.6.1
            this._time === this._dur && (this._tTime += this._dur - 0.01);
          },
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 100); // seamless looping backwards
          },
        }),
        cycleDuration = spacing * items.length,
        dur; // the duration of just one animateFunc() (we'll populate it in the .forEach() below...

      // loop through 3 times so we can have an extra cycle at the start and end - we'll scrub the playhead only on the 2nd cycle
      items
        .concat(items)
        .concat(items)
        .forEach((item, i) => {
          let anim = animateFunc(items[i % items.length]);
          rawSequence.add(anim, i * spacing);
          dur || (dur = anim.duration());
        });

      // animate the playhead linearly from the start of the 2nd cycle to its end (so we'll have one "extra" cycle at the beginning and end)
      seamlessLoop.fromTo(
        rawSequence,
        {
          time: cycleDuration + dur / 2,
        },
        {
          time: "+=" + cycleDuration,
          duration: cycleDuration,
          ease: "none",
        }
      );
      return seamlessLoop;
    }

    // below is the dragging functionality (mobile-friendly too)...
    Draggable.create(".drag-proxy", {
      type: "x",
      trigger: ".cards",
      onPress() {
        this.startOffset = scrub.vars.offset;
      },
      onDrag() {
        scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
        scrub.invalidate().restart(); // same thing as we do in the ScrollTrigger's onUpdate
      },
      onDragEnd() {
        scrollToOffset(scrub.vars.offset);
      },
    });
  }, []);

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
      {/* <div className="gallery">
        <ul className="cards">
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
        </ul>
        <div className="actions">
          <button className="prev">Prev</button>
          <button className="next">Next</button>
        </div>
      </div>
      <div className="drag-proxy"></div> */}

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
                <div key={project.details} className="mr-[20px]">
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
                  <ProjectCard project={project} key={project.details} />
                ))}
              <div className="drag-proxy"></div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="project-card">
              {projects
                .filter((project) => project.type === "open")
                .map((project) => (
                  <ProjectCard project={project} key={project.details} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
        <div className="flex items-center justify-center md:mt-[170px] ">
          {/* <Link href="/articles"> */}
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
          {/* </Link> */}
        </div>
      </section>
      <section className="md:mt-[210px] md:mx-[110px] md:mb-[110px]">
        <Newsletter />
      </section>
    </section>
  );
};

export default Work;
