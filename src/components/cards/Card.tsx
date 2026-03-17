import clsx from "clsx";

type AboutCardProps = {
  cardLayoutClassName?: string;
  img?: string;
  title?: string;
  description?: string;
};

const Card = ({
  cardLayoutClassName,
  img,
  title,
  description,
}: AboutCardProps) => {
  return (
    <div
      className={clsx(
        "flex bg-primarygreen100 rounded-10 pb-5 flex-col gap-4",
        cardLayoutClassName,
      )}
    >
      <img src={img} className="w-full rounded-se-10 rounded-ss-10 " alt="" />

      <div className="flex flex-col px-5 gap-2">
        <p className="text-primary font-bold">{title}</p>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default Card;
