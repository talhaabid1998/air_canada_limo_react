import { createBrowserRouter } from "react-router-dom";

import React from "react";
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <OrderPage/>,
  },
]);
