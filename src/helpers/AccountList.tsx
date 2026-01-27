import { img } from "../constant";
import type { ProfileItem } from "../pages-types/types";

const ProfileList: ProfileItem[] = [
  {
    name: "Cynthia Ejiekeme",
    avatar: img.avatar,
    text: "I'm looking to get a suit",
    time: "12:00pm",
    path: "/CynthiaEjiekeme",
  },
  {
    name: "Bridget Otoo",
    avatar: img.avatar,
    text: "I'm looking to get a suit",
    time: "12:00pm",
    unreadMessage: 1,
    path: "/BridgetOtoo",
  },
  {
    name: "Chukwu Blessed",
    avatar: img.avatar,
    text: "I'm looking to get a suit",
    time: "12:00pm",
    path: "/Chukwublessed",
  },
  {
    name: "Mma Obiora",
    avatar: img.avatar,
    text: "I'm looking to get a suit",
    unreadMessage: 5,
    time: "12:00pm",
    // path: '/MmaObiora',
  },
  {
    name: "Emmanuel Smith",
    avatar: img.avatar,
    text: "I'm looking to get a suit",
    time: "12:00pm",
    unreadMessage: 3,
    path: "/EmmanuelSmith",
  },
  {
    name: "Charles Mensah",
    avatar: img.avatar,
    text: "I'm looking to get a suit",
    path: "/CharlesMensah",
    time: "12:00pm",
    unreadMessage: 2,
  },
  {
    name: "Tom Holland",
    avatar: img.avatar,
    text: "I'm looking to get a suit",
    path: "/TomHolland",
    time: "12:00pm",
  },
];

export default ProfileList;
