export type SidebarProps = {
  isOpen: boolean;
  onToggle?: () => void;
  isMobile: boolean;
};

export type ProfileItem = {
  name: string;
  avatar: string;
  time?: string;
  unreadText?: number;
  text: string;
  path?: string;
  section?: string | null;
  children?: {
    name: string;
    path: string;
    isTray?: boolean;
    isPage?: boolean;
  }[];
  moveToBottom?: boolean;
  shower?: boolean;
  hasNestedRoutes?: boolean;
};

export type ProfileCreationList =
  | "personalInformation"
  | "aboutMe"
  | "socialLinks"
  | "workExperience";