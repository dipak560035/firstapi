import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </HeroUIProvider>
);








