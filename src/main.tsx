import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

document.documentElement.classList.add("js");
createRoot(document.getElementById("root")!).render(<App />);
