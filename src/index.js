import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Allfeatures from "./features/Allfeatures";
import Alldownloads from "./Download/Alldownloads";
import Allabout from "./About/Allabout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "features",
    element: <Allfeatures/>
  },
  {
    path: "Download",
    element : <Alldownloads/>
  },
  {
    path : "About",
    element:<Allabout/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);













// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// var raki = ReactDOM.createRoot(document.getElementById('root'));
// raki.render(<App />);