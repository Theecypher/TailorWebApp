import type { ReactNode } from "react";

type OnboardingLayoutProps = {
  children: ReactNode;
  header?: string;
  subHeader?: string;
  icon?: boolean;
  className?: string;
  otpEmail?: string;
};

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return <div>{children}</div>;
};

export default OnboardingLayout;

// {id: "1769602743842", name: "Untitled Project", item: [{type: "image",…}, {type: "image",…}]}

const project = {
  inProgress: [
    {
      title: "title of the project",
      id: "0",
      items: [
        { type: "image", content: "the image path" },
        { type: "video", content: "the image path" },
        { type: "text", content: "a string showing the text" },
      ],
    },
    {
      title: "title of the project",
      id: "1",
      items: [
        { type: "image", content: "the image path" },
        { type: "video", content: "the image path" },
        { type: "text", content: "a string showing the text" },
      ],
    },
    {
      title: "title of the project",
      id: "2",
      items: [
        { type: "image", content: "the image path" },
        { type: "video", content: "the image path" },
        { type: "text", content: "a string showing the text" },
      ],
    },
  ],
  draft: [],
  pulbished: [],
};
