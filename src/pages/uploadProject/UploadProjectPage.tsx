import { useEffect, useState } from "react";
import { img } from "../../constant";
import { type FieldConfig } from "../../shared/dynamicForm/DynamicForm";
import { generateYupSchema } from "../../utils/YupSchema";
import { Form, Formik } from "formik";
import UploadProjectActions from "./UploadProjectsActions";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import QuestionModal from "../../components/modals/QuestionModal";
import UploadProjectDisplay from "./UploadProjectDisplay";
import { UploadActionButtons } from "./UploadActionsButtons";
import {
  addMedia,
  addProjectContent,
  moveAllMedia,
} from "../../store/MediaSlice/MediaSlice";
import SuccessModal from "../../components/modals/SuccessModal";
import type { MediaContentProp, MediaItem } from "../../types/media";
import { fileToBase64 } from "../../utils/FileToBase64";

export const UploadProjectPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleAddIcons, setToggleAddIcons] = useState<boolean>(false);
  const [isOpenDraftModal, setIsOpenDraftModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [isOpenSuccesModal, setIsOpenSuccessModal] = useState<boolean>(false);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");
  const [projectId, setProjectId] = useState<string | null>(null);

  const mediaItems = useSelector((state: RootState) => state.media.inProgress);

  const handleSaveFileToDraft = () => {
    dispatch(moveAllMedia({ from: "inProgress", to: "draft" }));
  };

  const handleSaveProject = () => {
    setIsPublishing(true);
    dispatch(moveAllMedia({ from: "inProgress", to: "published" }));
    setTimeout(() => {
      setIsOpenSuccessModal(true);
      setIsPublishing(false);
    }, 1000);
  };

  const handleAddClick = () => {
    setToggleAddIcons((prev) => !prev);
  };
  const showActions = isMobile && mediaItems.length > 0;

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

    const newContent: MediaContentProp[] = [];

    for (const file of Array.from(files)) {
      const base64 = await fileToBase64(file);
      const type = file.type.startsWith("video") ? "video" : "image";

      newContent.push({ type, content: base64 });
      dispatch(
        addProjectContent({
          status: "inProgress",
          id,
          name,
          content: newContent,
        }),
      );
    }
  };

  return (
    <div className="min-h-screen px-3 lg:px-0 pb-3 w-full bg-borderThree flex">
      {isOpenDraftModal && (
        <QuestionModal
          isOpen={isOpenDraftModal}
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
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="border-b w-full p-2 border-borderButton bg-transparent outline-none"
                  />

                  {mediaItems.length > 0 ? (
                    <UploadProjectDisplay />
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
            onSaveDraft={handleSaveFileToDraft}
            onContinue={handleSaveProject}
            isSubmitting={isPublishing}
            className="flex flex-row px-5"
          />
        )}

        <div className="hidden lg:flex w-[20%] min-h-screen bg-white justify-center py-[40px]">
          <div className="sticky top-10 self-start flex flex-col items-center justify-center gap-[40px]">
            <UploadProjectActions
              className="hidden lg:grid grid-cols-2 items-center gap-5"
              onHandleFile={handleFiles}
            />

            <UploadActionButtons
              onSaveDraft={handleSaveFileToDraft}
              onContinue={handleSaveProject}
              isSubmitting={isPublishing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
