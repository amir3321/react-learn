import { createRoot } from "react-dom/client";
import "@/index.css";
import "@/styles/colors.css";
import "@/styles/shadows.css";
import "@/styles/tpography.css";
import "@/styles/shapes.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={ErrorPage}  onReset={() => {}} >
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </ErrorBoundary>
  );
