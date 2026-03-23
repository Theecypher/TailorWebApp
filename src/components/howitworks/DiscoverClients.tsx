import { img } from "../../constant";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";

const DiscoverClients = () => {
  return (
    <section className="relative overflow-hidden bg-primary_active py-20 lg:pb-0">
      {/* <div className="absolute border border-orange-500 inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-[radial-gradient(circle,_#4AFFFF33_20%,_transparent_70%)] blur-[241.89px]" />
      </div> */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_#4AFFFF33_20%,_transparent_70%)] blur-[200px]" />

      <div className="relative z-10 flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-5 text-center text-primarygreen200 px-7 md:px-14 lg:w-[80%] xl:w-[59%] mx-auto">
          <p className="text-20 font-bold leading-[120%] lg:text-[50px] lg:leading-[100%]">
            Discover Clients and{" "}
            <span className="lg:block">Enhance Your Job Prospects</span>
          </p>
          <p className="text-12 leading-[140%] text-primarygreen200 lg:text-20 lg:leading-[130%]">
            Tailora connects you with clients who are actively looking for
            skilled tailors like you. Apply for jobs, showcase your portfolio,
            and get hired for exciting projects that elevate your career.
          </p>

          <div className="hidden md:flex w-[25%] mx-auto">
            <ShareWorkButton className="w-full font-bold bg-primarygreen200 text-primary_active">
              Join Tailora
            </ShareWorkButton>
          </div>
        </div>

        <div className=" md:px-10 lg:flex-1 lg:mt-auto">
          <img
            src={img.discoverClient}
            className="w-full hidden md:flex lg:hidden"
            alt=""
          />
          <img
            src={img.discoverClientMobile}
            className="w-full md:hidden"
            alt=""
          />
          <img
            src={img.discoverClientLg}
            className="w-full lg:flex hidden"
            alt=""
          />
        </div>
        <div className="self-center md:hidden w-[80%] mx-auto">
          <ShareWorkButton className="w-full bg-primarygreen200 text-primary_active">
            Join Tailora
          </ShareWorkButton>
        </div>
      </div>
    </section>
  );
};

export default DiscoverClients;
