import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import Head from "next/head";
import Newsletter from "../components/article/Newsletter";
import CardArticle from "../components/CardArticle";
import articleData from "../data/article.json";
import { Article } from "../types/interface";

interface ArticleState {
  article: Article[];
}

const Article = ({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [content, setContent] = useState<ArticleState["article"]>(
    articles.slice(0, 6)
  );
  const [isShow, setIsShow] = useState(false);

  const toggleArticles = () => {
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
        <title>Articles | Ejiro Asiuwhu</title>
        <meta
          name="description"
          content="Articles, content, post, videos and  writings by Ejiro Asiuwhu"
        />
      </Head>
      <header className="bg-hero-article md:h-[590px] h-[222px] w-full bg-cover bg-top flex items-center justify-center">
        <div className="text-center text-white ">
          <h1 className="md:text-[91px] text-[34px] leading-none font-extrabold">
            Articles
          </h1>
          <p className="uppercase md:text-[20px] text-[8px]  font-medium md:tracking-[4px] tracking-[0.27em]">
            By Ejiro AsiuwHu
          </p>
        </div>
      </header>

      <main className=" lg:px-[120px] px-[18px] md:pt-[160px] pt-[45px]">
        <section>
          {content.map((article) => (
            <CardArticle article={article} key={article.title} />
          ))}
          {
            <div className="mx-auto flex md:mt-[150px] pt-[30px] ">
              <button
                onClick={toggleArticles}
                className="btn10 hover-main group !border !border-solid 
                !border-dark 
                text-white bg-dark hover:text-dark 
                hover:bg-white inline-flex items-center justify-center 
                font-bold lg:text-[22px] md:text-[18px] text-[10px] py-[28px] md:w-[310px] w-[153px] md:h-[91px] 
                h-[50px] mx-auto"
              >
                <span
                  className="inline-block 
              
                  
                  "
                >
                  {/* // mr-[13px] */}
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
                  className="group-hover:stroke-dark transition-colors"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg> */}
              </button>
            </div>
          }
          <div className="md:my-[150px] my-[100px]">
            <Newsletter />
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      articles: articleData,
    },
  };
};

export default Article;
