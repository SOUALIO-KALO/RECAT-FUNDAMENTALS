import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Presentation, Project, Contact } from "components";
const router = createBrowserRouter([
  /* {
    path: "/",
    element: <App />,
  },
  {
    path: "/presentation",
    element: <App />,
  },
  {
    path: "/projects",
    element: <App />,
  },
  {
    path: "/contacts",
    element: <App />,
  }, */
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/presentation",
        Component: Presentation,
      },
      {
        path: "/project",
        Component: Project,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
