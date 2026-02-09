import userlogo from "../assets/svg/User.svg";
import award from "../assets/svg/fi_award.svg";
import globe from "../assets/svg/fi_globe.svg";
import help_circle from "../assets/svg/fi_help-circle.svg";

export const ProfileCreationData = [
  {
    name: "personalInformation",
    value: "personalInfo",
    label: "Personal Information",
    img: userlogo,
  },
  { name: "About Me", value: "", label: "About Me", img: help_circle },
  {
    name: "Social links",
    value: "socialLinks",
    label: "Social Links",
    img: globe,
  },
  {
    name: "Work experience",
    value: "workExperience",
    label: "Work Experience",
    img: award,
  },
];
