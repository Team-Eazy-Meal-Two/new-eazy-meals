import React from "react";
import { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import { Routing } from "./App.Routing";
import { Provider as AuthProvider } from "../../hooks/useAuth";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

const Global = createGlobalStyle`
html{
  min-height:100%;
  height:100%;
}
body{
overflow-x: hidden;
overflow-y: scroll;
min-height:100%;

}`;

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Global />

      <AuthProvider>
        <HashRouter>
          <Routing />
        </HashRouter>
      </AuthProvider>
    </StylesProvider>
  );
};

export default App;
