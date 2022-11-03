import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "./themeProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
