import { Article } from "../types/interface";
import ArrowUp from "./shared/ArrowUp";
import React from "react";
import Image from "next/image";

interface ArticleProps {
  article: Article;
}

const CardArticle: React.FC<ArticleProps> = ({ article }) => {
  return (
    <a
      href={article.url}
      title={article.title}
      target="_blank"
      rel="noreferrer"
    >
      <article
        className="bg-[#FBFBFB] w-full md:pt-[58px] mb-[20px] pt-[20px] md:pb-[47px] pb-[23px] transition min-h-inherit md:group-hover:opacity-50 md:hover:scale-[1.04]  md:hover:opacity md:mb-[30px] hover:shadow-[0_26px_49px_rgba(0,0,0,0.08)] "
        itemType="http://schema.org/CreativeWork"
      >
        <div>
          <article className="md:pb-[50px] pb-[30px] border-b-[0.5px] border-solid border-[gray3] ">
            <div className="md:px-[80px] px-[30px] ">
              <h2
                className="text-dark md:mb-[39px]
             mb-[19px] md:text-[20px] text-[10px] 
             md:leading-[41px] leading-[12px] font-extrabold md:tracking-[4px] tracking-[0.27em]
             uppercase group-hover:text-white"
              >
                {article.tech}
              </h2>

              <h1 className="text-dark md:text-[34px] text-[16px]  mb-[10px]  md:leading-[34px] leading-[19px]  font-extrabold md:mb-[12px]">
                {article.title}
              </h1>
              <p className="text-gray5 md:text-[22px] text-[10px] font-normal">
                {article.description}
              </p>
            </div>
          </article>

          <article className="flex items-center justify-between text-gray3 text-[26px] md:pt-[40px]  pt-[17px]  md:px-[80px]  px-[30px] pb-">
            <div className="flex items-center text-[10px] md:text-[20px] ">
              <time
                dateTime={article.date}
                className="lg:mr-[70px] md:mr-[40px] mr-[26px] font-semibold "
              >
                {article.date}
              </time>
              <p className="lg:mr-[70px] md:mr-[40px] mr-[26px] font-semibold ">
                {article.duration}
              </p>

              <Image
                src={article.image}
                alt={article.publisher}
                className="md:w-[110px] w-[56px]"
                width={120}
                height={30}
              />
            </div>
            <div className="md:w-[15px] w-[8px] ">
              <ArrowUp strokeColour="#111111" />
            </div>
          </article>
        </div>
      </article>
    </a>
  );
};
export default CardArticle;
