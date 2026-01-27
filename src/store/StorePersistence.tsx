import { useSelector } from "react-redux";

import type { RootState } from ".";
import { useEffect, type ReactNode } from "react";
import { saveProjects } from "./PersistSlice/persist";

type Props = {
  children: ReactNode;
};

const StorePersistence = ({ children }: Props) => {
  const inProgress = useSelector((state: RootState) => state.media.inProgress);
  const draft = useSelector((state: RootState) => state.media.draft);
  const published = useSelector((state: RootState) => state.media.published);

  useEffect(() => {
    saveProjects({
      inProgress,
      draft,
      published,
    });
  }, [
    {
      inProgress,
      draft,
      published,
    },
  ]);

  return <div>{children}</div>;
};

export default StorePersistence;
