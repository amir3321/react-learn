import { createRoot } from "react-dom/client";
import "@/index.css";
import "@/styles/colors.css";
import "@/styles/shadows.css";
import "@/styles/tpography.css";
import "@/styles/shapes.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
