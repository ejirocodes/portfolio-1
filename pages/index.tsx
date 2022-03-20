/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import barba from "@barba/core";
import { gsap } from "gsap/dist/gsap";
import { Cursor } from "../animation/cursor";
import useScroll from "../hooks/useScroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { socials } from "../data/social";
// import About from "../components/home/About";
import TextHoriz from "../components/shared/TextHoriz";
import TechStack from "../components/home/TechStack";
import Experience from "../components/home/Experience";
import Endorsement from "../components/home/endorsement/Endorsement";
import Work from "../components/home/work/Work";
// import Newsletter from "../components/article/Newsletter";
import Quote from "../components/home/Quote";

import dynamic from "next/dynamic";

const About = dynamic(() => import("../components/home/About"));
const Newsletter = dynamic(() => import("../components/article/Newsletter"));

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Ejiro Asiuwhu - Frontend Engineer, JavaScript Developer and Technical
          Writer.
        </title>
        <meta
          name="description"
          content="Ejiro Asiuwhu is a Frontend Engineer and JavaScript developer highly skilled in building complex interactive applications with JavaScript and TypeScript, scalable design patterns, advanced web components architectures and progressively enhanced web applications."
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:title"
          content="Ejiro Asiuwhu: Software Engineer (Frontend)."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ejiro Asiuwhu" />
        <meta property="og:url" content="https://ejiro.dev" />
        <meta name="theme-color" content="#111111" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:pt-[137px] pt-[60px] w-full">
        <section className="flex lg:items-center huge:justify-center lg:justify-between  !items-center md:flex-row flex-col w-full container-space">
          <div className="w-full md:w-1/2  2xl:w-auto mr-0 2xl:mr-[50px] md:mr-[30px] md:mb-0 mb-[60px]">
            <h1 className="font-extrabold font-['NeueMachina'] leading-none xl:text-[110px] lg:text-[80px] md:text-[68px] sm:text-[50px] text-[42px] mb-[20px]">
              <span className="mr-[8px]">Frontend</span>
              <br className="sm:hidden 2xl:inline xl:inline lg:inline md:inline" />
              Engineer.
            </h1>
            <p className="xl:mb-[90px] lg:mb-[50px]  mb-[40px] w-full max-w-[538px] lg:text-[18px] xl:text-[22px] text-[14px] leading-[24px] md:leading-[40px]">
              Hello, Ejiro Asiuwhu here. I focused on developing premium web
              experiences through the lens of design thinking, web performance,
              accessibility, interaction{" "}
            </p>
            <a
              href=""
              className="font-bold flex group xl:text-[24px] lg:text-[18px] text-[12px]  items-center "
            >
              <span className="inline-flex mr-[17px] icon-hover md:after:h-[2px]  after:h-[1px] md:after:bottom-[3px]  after:bottom-[1px]  link-hover">
                What brought you to Code Lord?
              </span>
              <span className=" icon-hover">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.00098 1.87029L13.6301 8.49941L7.00098 15.1285M13.6301 8.49941L0.37185 8.49941L13.6301 8.49941Z"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="w-full md:w-auto ml-0 2xl:ml-[50px]  2xl:w-auto  flex justify-end items-center flex-col">
            <picture className="lg:mb-[50px] mb-[30px]">
              <source
                srcSet="/img/ejiro-asiuwhu.webp"
                type="image/webp"
              />
              <source
                srcSet="/img/ejiro-asiuwhu.png"
                type="image/png"
              />
              <img src="/img/ejiro-asiuwhu.png" alt="Ejiro Asiuwhu" />
            </picture>
            <ul className="flex items-center">
              {socials.map((social) => (
                <li key={social.title}>
                  <a
                    href={social.url}
                    aria-label={social.arialLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:mr-[46px] mr-[23px] md:text-[26px] text-[14px] text-gray2 font-extrabold"
                  >
                    {social.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <About />
        <TextHoriz />
        <TechStack />
        <Experience />
        <Endorsement />
        <Work />
        <Quote />
        <div className="md:container-space container-mb ">
          <Newsletter />
        </div>
      </main>
    </div>
  );
};

export default Home;
