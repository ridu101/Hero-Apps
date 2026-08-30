import { createBrowserRouter } from "react-router";

import Root from "../pages/Root";
import Home from "../pages/Home";
import AllAppsPage from "../pages/AllAppsPage";
import AppDetails from "../pages/AppDetails";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
        index: true,
        loader: () => fetch("/appData.json"),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("/appData.json"),
        Component: AllAppsPage,
      },
      {
        path: "apps/:id",
        loader: () => fetch("/appData.json"),
        Component: AppDetails,
      },
      {
        path: "installation",

        loader: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(null);
            }, 500);
          });
        },
        Component: Installation,
      },
      {
        path: "*",
        Component: ErrorPage
      }
    ]
  }
]);
