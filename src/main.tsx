import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import "./fresh-home.css";
import "./product-hero.css";

createRoot(document.getElementById("root")!).render(<App />);
