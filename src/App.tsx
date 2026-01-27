import { RouterProvider } from "react-router";
import { router } from "./router/RouterPaths";


const App = () => {
  return <RouterProvider  router={router} />;
};

export default App;
