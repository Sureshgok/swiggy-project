import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header";
import Body from "./src/body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurentMenu from "./src/components/restaurentMenu";
import { Provider } from "react-redux";
import appStore from "./appStore";
import Cart from "./src/components/cart";
const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />

        <Outlet />
      </div>
    </Provider>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:resId",
        element: <RestaurentMenu />,
      },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("id1"));
root.render(<RouterProvider router={approuter} />);
