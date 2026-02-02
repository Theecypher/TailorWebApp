import type { MediaType, MediaContentProp } from "../../types/media";

const handleFiles = async (files: FileList | null) => {
  if (!files) return;

  let id = projectId;

  if (!id) {
    id = Date.now().toString();
    setProjectId(id);

    dispatch(
      addMedia({
        status: "inProgress",
        item: {
          id,
          name: projectName || "Untitled Project",
          item: [],
        },
      }),
    );
  }

  const newContents: MediaContentProp[] = [];

  for (const file of Array.from(files)) {
    const base64 = await fileToBase64(file);

    const type: MediaType = file.type.startsWith("video")
      ? "video"
      : "image";

    newContents.push({ type, content: base64 });
  }

  dispatch(
    addProjectContent({
      status: "inProgress",
      id,
      content: newContents,
    })
  );
};







// Add to project display
useEffect(() => {
  if (!projectId) return;

  dispatch(
    updateProjectName({
      status: "inProgress",
      id: projectId,
      name: projectName || "Untitled Project",
    })
  );
}, [projectName, projectId, dispatch]);










