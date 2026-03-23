import ShareWorkButton from "../../shared/button/ShareWorkBtn";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section className="flex flex-col mt-16 px-5 lg:px-[60px] py-10 lg:mt-20">
      <div className="flex flex-col gap-5">
        <div className="my-5">
          <p className="text-primary text-center mx-auto text-3xl font-bold leading-[120%] tracking-[-4%] lg:text-[56px]">
            A New Home For Tailors{" "}
            <span className="lg:block">Around The World</span>
          </p>
        </div>

        <div className="my-5">
          <AboutCard />
        </div>

        <div className="self-center w-[70%] my-5 md:w-[25%]">
          <ShareWorkButton className="bg-primary_active w-full py-4 text-primarygreen200">
            Join Tailora
          </ShareWorkButton>
        </div>
      </div>
    </section>
  );
};

export default About;
