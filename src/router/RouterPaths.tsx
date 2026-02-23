import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
// import ViewPortLayout from "../layouts/ViewPortLayout";
// import SocialViewPort from "../components/viewport/SocialViewPort";
import UploadProject from "../pages/uploadProject";
import { UploadProjectPage } from "../pages/uploadProject/UploadProjectPage";
import UploadProjectLayout from "../components/viewport/UploadProjectLayout";

// const BusinessTransaction = lazy(
//   () =>
//     import(
//       '../pages/ManagementAndCompliance/BusinessTransaction/BusinessTransactionPageLayout'
//     )
// );

const ProjectView = lazy(() => import("../pages/projectView"));

const Login = lazy(() => import("../pages/auth/Signin"));
const Signup = lazy(() => import("../pages/auth/Signup"));

const ProfileCreation = lazy(
  () => import("../pages/onboarding/profileCreation"),
);
const ProfileCreationQuestion = lazy(
  () => import("../pages/onboarding/profileCreation/ProfileCreationWrapper"),
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route
        path="/"
        element={
          <Suspense fallback={<div>This is a fallback</div>}>
            <h1>Hello</h1>
          </Suspense>
        }
      /> */}

      {/* <Route path="/uppp" element={<ProfileCreationQuestion />}/> */}

      <Route path="/upload" element={<UploadProjectLayout />}>
        <Route index element={<UploadProject />} />
        <Route path="/upload/uploadProject" element={<UploadProjectPage />} />
      </Route>

      {/* <Route path="/" element={<ViewPortLayout />}>
        <Route path="/social" element={<SocialViewPort />} />
        <Route path="/projectview" element={<ProjectView />} />
      </Route> */}

      <Route path="/">
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/reset-password" element={<ResetPassWord />} /> */}
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/profile-creation" element={<ProfileCreationQuestion />} />
      </Route>
    </Route>,
  ),
);
