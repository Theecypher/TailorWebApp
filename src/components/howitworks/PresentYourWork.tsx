import { img } from "../../constant";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";

const PresentYourWork = () => {
  return (
    <section className="bg-primarygreen200">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 py-14">
        <div className="flex flex-col text-left gap-3 lg:text-left lg:w-1/2 px-5 md:px-10 lg:gap-7">
          <p className="text-primarygreen600 text-left  font-bold leading-[120%] text-20 lg:text-[52px] lg:tracking-[-2%] xl:w-[87%]">
            Present your work with ease on Tailora
          </p>
          <p className="text-12 leading-[140%] text-grey500 lg:leading-[130%] lg:text-20">
            Showcase your work with Tailora. Track performance with built-in
            analytics to see client engagement and gain insights for
            improvement, helping you refine your craft and attract more
            opportunities.
          </p>

          <div className="hidden lg:flex w-[60%]">
            <ShareWorkButton className="w-full">Post your Work</ShareWorkButton>
          </div>
        </div>

        <div className=" md:px-10 lg:flex-1">
          <img src={img.presentYourWork} className="w-full" alt="" />
        </div>

        <div className="self-center lg:hidden w-[80%] mx-auto">
          <ShareWorkButton className="w-full">
            Post your Work
          </ShareWorkButton>
        </div>
      </div>
    </section>
  );
};

export default PresentYourWork;
