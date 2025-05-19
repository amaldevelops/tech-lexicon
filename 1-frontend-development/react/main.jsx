// You can use the following code as an template to create a React Router
// Installation: npm install react-router-dom
// Full Reference: https://www.theodinproject.com/lessons/node-path-react-new-react-router

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
