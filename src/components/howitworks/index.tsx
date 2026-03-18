import BuildConnections from "./BuildConnections";
import DiscoverClients from "./DiscoverClients";
import PresentYourWork from "./PresentYourWork";

const HowItWorks = () => {
  return (
    <section>
      <div>
        <PresentYourWork />
        <DiscoverClients />
        <BuildConnections />
      </div>
    </section>
  );
};

export default HowItWorks;
