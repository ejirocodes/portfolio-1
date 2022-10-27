import Link from "next/link";
import React from "react";
// import { Text } from "../../shared/Text";
import { IState as IProps } from "./Work";

export default function WorkCard({ niche }: IProps) {
  return (
    <section className="relative bg-[#FBFBFB] xl:p-24 md:p-8 sm:first:mb-0 first:mb-8 ">
      <h1 className="mb-[12px] md:text-[36px] font-bold text-[24px] leading-[24px] md:leading-[44px] ">
        {niche.title}
      </h1>
      {/* <Text aria-atomic as="p">
        Jobina
      </Text> */}
      <p className="text-[14px] xl:text-[22px] xl:mb-[60px] mb-20">
        {niche.lead}
      </p>
      <div className="text-left mt-[50px] xl:mt-[120px] lg:mt-[80px] ">
        <Link href={niche.link}>
          <a
            className="btn10 hover-main md:h-auto h-[63px]  group border border-solid border-gray2 text-white bg-dark hover:text-dark 
          hover:bg-white inline-flex items-center justify-center MD:font-bold  font-semibold text-[14px] w-full md:text-[19px] py-[28px] md:w-[305px] mx-auto"
          >
            <span className="mr-[12px]">{niche.linkText}</span>
            <span>
              <svg
                width="11"
                height="13"
                viewBox="0 0 11 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:stroke-[#111] transition-all"
                  d="M9.26717 7.82993L7.51275 1.28236L0.965173 3.03678M7.51275 1.28236L1.48828 11.717L7.51275 1.28236Z"
                  stroke="#ffffff"
                  strokeWidth="1.44609"
                  strokeLinecap="square"
                />
              </svg>
            </span>
          </a>
        </Link>
      </div>
      <span className="absolute md:top-[53px] md:right-[58px] top-[120px]  right-[28px] ">
        {niche.isWork ? (
          <svg
            className="w-[13px] md:full"
            width="22"
            height="32"
            viewBox="0 0 22 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5468 13.7325L14.8078 0.16333L0.483398 18.2608H9.53214L7.27114 31.83L21.5971 13.7325H12.5468Z"
              fill="#222222"
            />
          </svg>
        ) : (
          <svg
            className="w-[13px] md:full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.822 0.750977L8.25945 9.31848L0.751953 16.8222V23.2497H7.1807L14.6882 15.7447L23.252 7.18223L16.822 0.750977ZM12.0482 4.50098L19.502 11.9547L12.0482 4.50098Z"
              fill="#111111"
              stroke="#111111"
              strokeWidth="0.723045"
              strokeLinecap="square"
            />
          </svg>
        )}
      </span>
    </section>
  );
}
