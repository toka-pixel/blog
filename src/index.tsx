import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Register the service worker (production only)
serviceWorkerRegistration.register({
  onSuccess: () => console.log("App is offline-ready!"),
  onUpdate: (registration: { waiting: any }) => {
    console.log("New version available!");
    // Trigger a prompt to reload the app
    if (registration.waiting) {
      window.confirm("New version available! Refresh to update?") &&
        window.location.reload();
    }
  },
});
