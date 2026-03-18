import { img } from "../../constant";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";

const text = {
  mobile:
    "Tailora connects skilled tailors with clients seeking custom designs. Showcase your expertise, find top talent, and explore new opportunities all in one place",
  desktop: [
    "Tailora connects skilled tailors with clients seeking custom designs.",
    "Showcase your expertise, find top talent, and explore new",
    " opportunities all in one place",
  ],
};

const Hero = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col p-5 gap-5 items-center text-center">
        <h1 className="font-bold leading-[100%] text-white text-3xl lg:text-[70px]">
          Tailoring just got
          <span className="text-primarygreen100 block md:inline lg:block">
            {" "}
            Easier
          </span>
        </h1>

        <p className="text-[#F9FBFB] text-[14px] leading-[140%] text-center lg:text-2xl">
          <span className="md:hidden">{text.mobile}</span>

          <span className="hidden md:inline">
            {text.desktop.map((line, index) => (
              <span key={index}>
                {line}
                {index !== text.desktop.length - 1 && <br />}
              </span>
            ))}
          </span>
        </p>

        <div className="py-5 lg:w-[15%]">
          <ShareWorkButton className="bg-[#E6F2F2] w-full text-primary_active">
            Join Tailora
          </ShareWorkButton>
        </div>
      </div>

      <div className="flex items-end gap-3 mt-5 mb-auto md:gap-10 lg:gap-14 lg:w-full">
        <div>
          <img className="rounded-e-10" src={img.heroImg} />
        </div>
        <div>
          <img className="rounded-[8px]" src={img.heroImg1} />
        </div>
        <div>
          <img className="rounded-s-[8px]" src={img.heroImg2} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
