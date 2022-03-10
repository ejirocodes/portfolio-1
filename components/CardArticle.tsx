import Image from 'next/image'
import { Article } from '../types/interface';
import ArrowUp from './shared/ArrowUp';

const CardArticle: React.FC<Article> = ({ article }) => {
    console.log(article.title)
    return (
        <article className="bg-[#FBFBFB] w-full pt-[70px] pb-[55px] ">
            <article className="pb-[68px] border-b-[0.5px] border-solid border-[gray3]">
                <div className="px-[96px]">
                    <h2 className="text-dark mb-[49px] text-[23px] font-extrabold uppercase">{article.tech}</h2>
                    <h1 className="text-dark text-[40px] leading-[48px] font-extrabold mb-[4px]">{article.title}</h1>
                    <p className="text-gray5 text-[26px] font-normal">{article.description}</p>

                </div>

            </article>

            <article className="flex items-center justify-between text-gray3 text-[26px] pt-[40px] px-[96px]">
                <div className="flex items-center">
                    <time dateTime={article.date} className="mr-[88px]">{article.date}</time>
                    <p className="mr-[88px]">{article.duration}</p>

                    <img src={article.image} alt={article.publisher} />
                </div>
                <ArrowUp strokeColour="#111111" url={article.url} />

            </article>
        </article>
    )
}
export default CardArticle;