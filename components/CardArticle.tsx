import Image from 'next/image'
import { Article } from '../types/interface';
import ArrowUp from './shared/ArrowUp';

const CardArticle: React.FC<Article> = ({ article }) => {
    console.log(article.title)
    return (
        <article className="bg-[#FBFBFB] w-full md:h-[483px]">
            <article className="pb-[68px] border-b-[0.5px] border-solid border-[gray3]">
                <h2 className="text-dark mb-[49px] text-[23px] font-extrabold uppercase">{article.tech}</h2>
                <h1 className="text-dark text-[40px] leading-[48px] font-extrabold mb-[4px]">{article.title}</h1>
                <p className="text-gray5 text-[26px] font-normal">{article.description}</p>

            </article>

            <article className="flex items-center justify-between text-gray3 text-[26px]">
                <div className="flex items-center">
                    <time dateTime={article.date} className="mr-[88px]">{article.date}</time>
                    <p className="mr-[88px]">{article.duration}</p>
                    <Image src={article.image} alt={article.publisher} width={157}
                        height={157} />
                </div>
                <ArrowUp strokeColour="#111111" />

            </article>
        </article>
    )
}
export default CardArticle;