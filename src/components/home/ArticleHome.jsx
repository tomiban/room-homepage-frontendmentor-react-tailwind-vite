import ImgHero1 from "../../assets/images/desktop-image-hero-1.jpg";
import ImgHero2 from "../../assets/images/desktop-image-hero-2.jpg";
import ImgHero3 from "../../assets/images/desktop-image-hero-3.jpg";
import ArrowIcon from "../../assets/svg/icon-arrow.jsx";

const ArticleHome = ({heroArticle}) => {
    return (
        <>
         <img
            src={heroArticle.img}
            alt={heroArticle.text}
            className=' w-full h-full col-start-1 col-end-4 row-start-1 row-end-3  lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3'
        />
        <article className='lg:col-start-5 col-start-1 col-end-4 row-start-3 row-end-4 p-7 lg:col-end-8 lg:row-start-1 lg:row.end-2 lg:px-24 flex flex-col justify-center items-start'>
            <h1 className='font-bold text-4xl mb-5'>
                {heroArticle.title}
            </h1>
            <p className='text-gray-500 mb-5'>
              {heroArticle.text}
            </p>
            <button className='flex space-x-3 items-center  hover:fill-gray-500 hover:text-gray-500 '>
                <span className='font-semibold  text-base uppercase tracking-[0.8rem] '>
                    Shop now
                </span>
                <ArrowIcon />
            </button>
        </article>

        </>
  );
};
export default ArticleHome;
