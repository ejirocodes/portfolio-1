import { NextPage } from "next";
import Head from "next/head";
import Newsletter from "../components/article/newsletter";
import CardArticle from "../components/CardArticle";
import { articles } from "../data/article";

const Article: NextPage = () => {
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
      <main className="h-screen md:px-[90px] md:pt-[160px]">
        <section>
          {articles.map((article) => (
            <CardArticle article={article} key={article.id} />
          ))}
          <div className="mx-auto flex md:mt-[84px] md:mb-[215px]">
            <button className="rounded-full border border-solid border-gray2 text-gray4 inline-flex items-center justify-center font-bold text-[22px] py-[28px] md:w-[310px] mx-auto">
              <span className="inline-block mr-[13px]">Load more</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 21 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8887 15.7596L15.2491 2.17631L1.66576 5.81595M15.2491 2.17631L2.75098 23.8237L15.2491 2.17631Z"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
          <Newsletter />
        </section>
      </main>
    </>
  );
};
export default Article;
