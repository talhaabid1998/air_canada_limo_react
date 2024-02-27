import { createBrowserRouter } from "react-router-dom";

import React from "react";
import HomePage from "./Pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
