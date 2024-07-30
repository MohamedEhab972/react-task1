import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Componants/Layout/Layout";
import About from "./Componants/About/About";
import Portofolio from "./Componants/Portofolio/Portofolio";
import Contact from "./Componants/Contact/Contact";
import Error from "./Componants/Error/Error";
import Home from "./Componants/Home/Home";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portofolio", element: <Portofolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
