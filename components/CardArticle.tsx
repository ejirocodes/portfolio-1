import Image from "next/image";
import { Article } from "../types/interface";
import ArrowUp from "./shared/ArrowUp";
            // @ts-ignore
const CardArticle: React.FC<Article> = ({ article }) => {
  return (
    <article
      className="bg-[#FBFBFB] cursor-grab w-full pt-[58px] pb-[47px] transition min-h-inherit md:group-hover:opacity-50 md:hover:scale-[1.04]  md:hover:opacity mb-[30px] hover:shadow-[0_26px_49px_rgba(0,0,0,0.08)] "
      itemType="http://schema.org/CreativeWork"
    >
      <div className="">
        <article className="pb-[50px] border-b-[0.5px] border-solid border-[gray3] ">
          <div className="px-[80px]">
            <h2 className="text-dark mb-[39px] text-[20px] leading-[41px] font-extrabold tracking-[4px] uppercase group-hover:text-white">
              {article.tech}
            </h2>
            <h1 className="text-dark text-[34px] leading-[34px] font-extrabold mb-[12px]">
              {article.title}
            </h1>
            <p className="text-gray5 text-[22px] font-normal">
              {article.description}
            </p>
          </div>
        </article>

        <article className="flex items-center justify-between text-gray3 text-[26px] pt-[40px] px-[80px]">
          <div className="flex items-center">
            <time
              dateTime={article.date}
              className="mr-[70px] font-semibold text-[18px]"
            >
              {article.date}
            </time>
            <p className="mr-[70px] font-semibold text-[18px]">
              {article.duration}
            </p>

            <img
              src={article.image}
              alt={article.publisher}
              className="w-[110px]"
            />
          </div>
          <ArrowUp strokeColour="#111111" url={article.url} />
        </article>
      </div>
    </article>
  );
};
export default CardArticle;
