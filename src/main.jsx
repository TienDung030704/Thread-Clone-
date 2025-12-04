// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { BrowserRouter } from "react-router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </BrowserRouter>
);
