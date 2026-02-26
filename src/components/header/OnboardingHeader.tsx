type Props = {
  title: string;
  description?: string;
};

const OnboardingHeader = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-3 text-center my-8">
      <h5 className="font-bold text-[28px]">{title}</h5>
      <p className="text-18">
       {description}
      </p>
    </div>
  );
};

export default OnboardingHeader;
