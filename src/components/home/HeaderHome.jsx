import ImgHero1 from "../../assets/images/desktop-image-hero-1.jpg";
import ImgHero2 from "../../assets/images/desktop-image-hero-2.jpg";
import ImgHero3 from "../../assets/images/desktop-image-hero-3.jpg";
import IconPrev from "../../assets/svg/icon-angle-left";
import IconNext from "../../assets/svg/icon-angle-right";
import ArticleHome from "./ArticleHome";
import {useState} from 'react'
const HeroArticles = [
	{
		title: "Discover innovative ways to decorate",
		text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        img: ImgHero1,
        id: 1,
	},
	{
		title: "We are available all across the globe",
		text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        img: ImgHero2,
        id: 2,
	},
	{
		title: "Manufactured with the best materials",
		text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        img: ImgHero3,
        id: 3,
	},
];



const HeaderHome = () => {
    const [index, setIndex] = useState(0);

    const handlePrevArticle = () => {
        if (index === 0) {
           return setIndex(HeroArticles.length - 1)
        }
        setIndex(index - 1);
    }

    const handleNextArticle = () => {
        if (index === HeroArticles.length - 1)  {
         return setIndex(0)
        }
        setIndex(index + 1)
    }
 
        return (
            <header className='grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]'>
                <ArticleHome heroArticle={HeroArticles[index]} />
                <div className='bg-black flex col-start-3 col-end-4 row-start-2 row-end-3 w-36 lg:col-start-4 lg.col-end-5 lg:row-start-2 lg:row-end-3 justify-self-end'>
                    <button onClick={handlePrevArticle} className='w-full '>
                        <IconPrev className='mx-auto fill-current text-gray-400 hover:text-white' />
                    </button>
                    <button onClick={handleNextArticle} className='w-full'>
                        <IconNext className='mx-auto  fill-current text-gray-400 hover:text-white' />
                    </button>
                </div>
            </header>
        );
   
};
export default HeaderHome;
