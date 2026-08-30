import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AllApps from "../pages/AllAppsPage";
import AppDetails from "../pages/AppDetails";
import Installation from "../pages/Installation";

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
        Component: AllApps,
      },
      {
        path: "apps/:id",
        loader: () => fetch("/appData.json"),
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      }
    ],
  },
]);
