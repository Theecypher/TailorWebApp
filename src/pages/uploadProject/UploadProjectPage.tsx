import { useEffect, useState } from "react";
import { img } from "../../constant";
import { type FieldConfig } from "../../shared/dynamicForm/DynamicForm";
import { generateYupSchema } from "../../utils/YupSchema";
import { Form, Formik } from "formik";
import UploadProjectActions from "./UploadProjectsActions";
import QuestionModal from "../../components/modals/QuestionModal";
import { UploadActionButtons } from "./UploadActionsButtons";
import SuccessModal from "../../components/modals/SuccessModal";
import type { CurrentProject, ProjectItem } from "../../types/media";
import { useProjectService } from "../../services/projectService";
import UploadProjectDisplay from "./UploadProjectDisplay";
// import UploadDisplay from "./UploadProjectDisplay";

export const UploadProjectPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleAddIcons, setToggleAddIcons] = useState<boolean>(false);
  const [isOpenDraftModal, setIsOpenDraftModal] = useState<boolean>(false);
  const [isOpenSuccesModal, setIsOpenSuccessModal] = useState<boolean>(false);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<CurrentProject>({
    title: "",
    items: [],
  });
  const [error, setIsError] = useState(false);
  const { saveToDraft, publishProject, getDrafts } = useProjectService();

  const drafts = getDrafts();

  const handleAddClick = () => {
    setToggleAddIcons((prev) => !prev);
  };
  const showActions = isMobile && currentProject.items.length > 0;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const field: FieldConfig[] = [
    {
      name: "projectName",
      placeholder: "Name your Project",
      required: true,
      type: "text",
    },
  ];

  type FormValues = {
    projectName: string;
  };

  const initialValues = {
    projectName: "",
    description: "",
  };

  const validationSchema = generateYupSchema(field);

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
  };

  const handleTitleChange = (value: string) => {
    setCurrentProject((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleFiles = (selectedFiles: FileList | null) => {
    console.log(true);

    if (!selectedFiles?.length) return;

    const newItems: ProjectItem[] = Array.from(selectedFiles).map((file) => {
      const previewUrl = URL.createObjectURL(file);

      return {
        type: file.type.startsWith("image") ? "image" : "video",
        content: previewUrl,
        file,
        name: file.name,
        size: file.size,
        mimeType: file.type,
      };
    });

    setCurrentProject((prev) => ({
      ...prev,
      items: [...prev.items, ...newItems],
    }));
  };

  const handleText = (text: string) => {
    console.log(text);

    const newTextItem: ProjectItem = {
      type: "text",
      content: text,
    };

    console.log(newTextItem);

    setCurrentProject((prev) => ({
      ...prev,
      items: [...prev.items, newTextItem],
    }));
  };

  const handleDraftButton = () => {
    if (currentProject.items.length === 0) {
      return;
    } else if (currentProject.title.length === 0) {
      setIsError(true);
      return;
    }

    setIsOpenDraftModal(true);
  };

  const handleSaveToDraft = () => {
    const cleanedItems: ProjectItem[] = currentProject.items.map((item) => ({
      type: item.type,
      content: item.content,
    }));

    saveToDraft({
      title: currentProject.title,
      items: cleanedItems,
    });

    setCurrentProject({ title: " ", items: [] });
  };

  const handlePublishProject = () => {
    const cleanedItems: ProjectItem[] = currentProject.items.map((item) => ({
      type: item.type,
      content: item.content,
    }));

    publishProject({
      title: currentProject.title,
      items: cleanedItems,
    });

    setCurrentProject({ title: "", items: [] });
    setIsOpenSuccessModal(true);
  };

  return (
    <div className="min-h-screen px-3 lg:px-0 pb-3 w-full bg-borderThree flex">
      {isOpenDraftModal && (
        <QuestionModal
          isOpen={isOpenDraftModal}
          onSubmit={handleSaveToDraft}
          onClose={() => setIsOpenDraftModal(false)}
        />
      )}

      {isOpenSuccesModal && (
        <SuccessModal
          successImg
          isOpen={isOpenSuccesModal}
          onClose={() => setIsOpenSuccessModal(false)}
        />
      )}

      <div className="flex flex-col lg:flex-row h-full w-full">
        <div
          className={`flex w-full flex-col min-h-screen gap-3 lg:w-[80%]  pt-3 lg:pt-5 lg:px-5 bg-borderThree`}
        >
          <div
            onClick={() => setIsOpenDraftModal(true)}
            className="border border-grey100 rounded-full w-8 flex items-center justify-center p-2   lg:p-1 md:rounded-100 md:w-[100px] cursor-pointer"
          >
            <img className="md:hidden" src={img.close} alt="Clese icon" />
            <p className="hidden md:flex text-borderTwotext-borderTwo cursor-pointer ">
              Cancel
            </p>
          </div>

          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="flex flex-col gap-4 p-5 h-full">
                  <input
                    type="text"
                    name="projectName"
                    placeholder="Name your Project"
                    value={currentProject.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className={`border-b w-full p-2 bg- border-borderButton bg-transparent outline-none ${error ? "border-red-700" : "border-borderButton"}`}
                  />

                  {currentProject.items.length > 0 ? (
                    currentProject.items.map((item, index) => (
                      <div key={index}>
                        <UploadProjectDisplay item={item} />
                      </div>
                    ))
                  ) : (
                    <div className="border flex gap-2 items-center border-borderButton h-[500px] w-full justify-center">
                      <img className="w-10 h-10" src={img.html} alt="" />
                      <img className="w-10 h-10" src={img.grid} alt="" />
                      <img className="w-10 h-10" src={img.picture} alt="" />
                      <img className="w-10 h-10" src={img.textIcon} alt="" />
                      <img className="w-10 h-10" src={img.video} alt="" />
                    </div>
                  )}

                  {isMobile && (
                    <>
                      <div className="justify-self-end w-10 h-10 fixed z-50 top-[90%] right-[22px] lg:hidden">
                        <img
                          onClick={handleAddClick}
                          src={img.addIcon}
                          alt=""
                        />
                      </div>

                      {toggleAddIcons && (
                        <UploadProjectActions
                          className="absolute flex-col top-[43%] right-[22px]"
                          onHandleFile={handleFiles}
                          onAddText={handleText}
                        />
                      )}
                    </>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>

        {showActions && (
          <UploadActionButtons
            isSubmitting={isPublishing}
            onContinue={handlePublishProject}
            onSaveDraft={handleDraftButton}
            className="flex flex-row px-5"
          />
        )}

        <div className="hidden lg:flex w-[20%] min-h-screen bg-white justify-center py-[40px]">
          <div className="sticky top-10 self-start flex flex-col items-center justify-center gap-[40px]">
            <UploadProjectActions
              className="hidden lg:grid grid-cols-2 items-center gap-5"
              onHandleFile={handleFiles}
              onAddText={handleText}
            />

            <UploadActionButtons
              isSubmitting={isPublishing}
              onContinue={handlePublishProject}
              onSaveDraft={handleDraftButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
