import { img } from "../../constant";
import Card from "../cards/Card";

const AboutCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:self-center gap-10">
        <Card
          title="Showcase you Crafts"
          description="Let your work take center stage! From bespoke suits to intricate dresses, Tailora lets your work shine and connects you with new opportunities."
          img={img.aboutGridImg}
        />

        <Card
          title="Grow Your Network"
          description="Connect with fellow tailors and clients on Tailora. Expand your reach, collaborate and discover new job opportunities within a vibrant community."
          img={img.aboutGridImg1}
        />
        <div className="">
          <Card
            // cardLayoutClassName="md:col-span-2 lg:col-span-1 md:justify-self-center"
            title="Connect with clients and get hired"
            description="Tailora makes it easy to find clients who appreciate your craft. Apply for jobs, showcase your skills, and secure projects that match your expertise."
            img={img.aboutGridImg2}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
