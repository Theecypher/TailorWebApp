import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store/index.tsx";
import { ThemeProvider } from "./contexts/ThemeContext/index.tsx";
import { ToastProvider } from "./contexts/ToastContext/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
