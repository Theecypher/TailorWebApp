import { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import ViewPortLayout from "../layouts/ViewPortLayout";
import SocialViewPort from "../components/viewport/SocialViewPort";
import UploadProject from "../pages/uploadProject";
import { UploadProjectPage } from "../pages/uploadProject/UploadProjectPage";
import UploadProjectLayout from "../components/viewport/UploadProjectLayout";

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

      <Route path="/upload" element={<UploadProjectLayout />}>
        <Route index element={<UploadProject />} />
        <Route path="/upload/uploadProject" element={<UploadProjectPage />} />
      </Route>

      <Route path="/" element={<ViewPortLayout />}>
        {/* <Route path="/uploadProject" element={<UploadProjectPage />} /> */}
        <Route path="/social" element={<SocialViewPort />} />
      </Route>
    </Route>
  )
);
