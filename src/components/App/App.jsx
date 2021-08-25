import React from "react";
import { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import { Routing } from "./App.Routing";
import { Provider as AuthProvider } from "../../hooks/useAuth";

// const fireTest = () => {
//   new Notification("Hi there!", {
//     body: "This is a discription with more details",
//     //badge: "use the icon link.. 56:50 from the video"
//     //icon: same as badge
//     //image:same 1:01:48
//   });
// };

const fireAlert = (registration) => {
  registration.showNotification("Hi there!", {
    body: "This is a discription with more details",
    //badge: "use the icon link.. 56:50 from the video"
    //icon: same as badge
    //image:same 1:01:48
    actions:[
    {
      action: "add",
      title: "Add",
      //icon: icon link 1:08:12
    },
    {
      action: "view",
      title: "View",
      //icon: icon link 1:08:12
    }
    ]
  });
};

const getRegistration = async () => {
  const registration = await navigator.serviceWorker.getRegistration();

  if (Notification.permission === "granted") {
    fireAlert();
  }
  if (Notification.permission === "default") {
    Notification.requestPermission(() => fireAlert(registration));
  }
 
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
  getRegistration()
}

const Global = createGlobalStyle`
@font-face {
  font-family: "Roboto";
  src: url("/font/400") format('truetype');
  font-weight: 400;
  font-style: normal;       
}
@font-face {
  font-family: "Roboto";
  src: url("/font/500") format('truetype');
  font-weight: 500;
  font-style: normal;       
}
@font-face {
  font-family: "Roboto";
  src: url("/font/700") format('truetype');
  font-weight: 700;
  font-style: normal;       
}
@font-face {
  font-family: "Roboto";
  src: url("/font/900") format('truetype');
  font-weight: 900;
  font-style: normal;       
}
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
