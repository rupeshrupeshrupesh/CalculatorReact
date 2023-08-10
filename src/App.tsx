import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./SideBar/SideNavigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home/HomePage";
import About from "./About/About-file";
import Feature from "./Home/Key/Feature";
import Comment from "./Home/Key/comment";
import Like from "./Home/Key/Like";
import SocialData from "./Social/SocialDeatil";
import Register from "./Social/Social-key/Register";
import Login from "./Social/Social-key/LoginSocial";
import Help from "./Social/Social-key/HelpSocial";
import BasicFunction from "./Calculator/BasicFucntion";
import CALSIBasicFunction from "./Calculator/BasicFucntion";
// import Register from "./Social/Soccial/Register";
// import Login from "./Social/Soccial/LoginSocial";
// import Help from "./Social/Soccial/HelpSocial";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SideBar />,
      children: [
        {
          path: "home",
          element: <HomePage />,
          children:[
            {path:"feature",element:<Feature/>},
            {path:"like",element:<Like/>},
            {path:"comment",element:<Comment/>},
          ]
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "social",
          element: <SocialData />,
          children:
          [
            {path:"register",element:<Register/>},
            {path:"login",element:<Login/>},
            {path:"help",element:<Help/>}


          ]
        },
        {
          path: "/help",
          element: <HomePage />,
        },
        {
          path: "/setting",
          element: <HomePage />,
        },
        {
          path: "calculator",
          element: <CALSIBasicFunction/>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
