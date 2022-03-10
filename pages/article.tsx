import { NextPage } from 'next'
import Head from 'next/head'
import CardArticle from '../components/CardArticle'
import { articles } from '../data/article'

const Article: NextPage = () => {
    return (
        <>
            <Head>
                <title>Article | Ejiro Asiuwhu</title>
                <meta name="description" content="Articles, content, post and  writings by Ejiro Asiuwhu" />
            </Head>

            <header className="bg-hero-article md:h-[710px] h-[70vh] bg-fixed bg-cover bg-center flex items-center justify-center">
                <div className="text-center text-white ">
                    <h1 className="text-[110px] leading-none">Articles</h1>
                    <p className="uppercase">By Ejiro AsiuwHu</p>

                </div>
            </header>
            <main className="h-screen">
                <section>
                    {articles.map((article) => (
                        <CardArticle article={article} key={article.id} />
                    ))
                    }
                </section>
            </main>

        </>
    )
}
export default Article