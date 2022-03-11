import { NextPage } from "next";
import Head from "next/head";
import Newsletter from "../components/article/Newsletter";
import CardArticle from "../components/CardArticle";
import { articles } from "../data/article";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger);

const Article: NextPage = () => {
  const [content, setContent] = useState(articles.slice(0, 6));
  const [isShow, setIsShow] = useState(false);

  const showAllContent = () => {
    if (!isShow) {
      setIsShow(true);
      setContent(articles);
    } else {
      setIsShow(false);
      setContent(articles.slice(0, 6));
    }
  };
  return (
    <>
      <Head>
        <title>Article | Ejiro Asiuwhu</title>
        <meta
          name="description"
          content="Articles, content, post and  writings by Ejiro Asiuwhu"
        />
      </Head>
      <header className="bg-hero-article md:h-[590px] w-full h-[70vh] bg-cover bg-top flex items-center justify-center">
        <div className="text-center text-white ">
          <h1 className="text-[91px] leading-none font-extrabold">Articles</h1>
          <p className="uppercase text-[20px] font-medium tracking-[4px]">
            By Ejiro AsiuwHu
          </p>
        </div>
      </header>
      <main className="md:px-[90px] md:pt-[160px]">
        <section>
          {content.map((article) => (
            <CardArticle article={article} key={article.title} />
          ))}
          {
            <div className="mx-auto flex md:mt-[84px]">
              <button
                onClick={showAllContent}
                className=" btn10 hover-main border border-solid border-gray2 text-white bg-dark hover:text-dark hover:bg-white inline-flex items-center justify-center font-bold text-[22px] py-[28px] md:w-[310px] mx-auto"
              >
                <span
                  className="inline-block 
              
                
                "
                >
                  {/* mr-[13px] */}
                  {!isShow ? "See more articles" : "See less articles"}
                </span>
                {/* <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.45703 1.875L7.70703 8.125L13.957 1.875"
                  stroke="#ffffff"
                  className="hover:stroke-dark transition-colors"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg> */}
              </button>
            </div>
          }
          <div className="mb-[140px] md:mt-[215px]">
            <Newsletter />
          </div>
        </section>
      </main>
    </>
  );
};
export default Article;
