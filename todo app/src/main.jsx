import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DataProvider from "./context/Datacontext.jsx";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="687582271352-99eoftfnikl88m5tqmbu0f0ilvqbpf7f.apps.googleusercontent.com">
      <DataProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </DataProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
