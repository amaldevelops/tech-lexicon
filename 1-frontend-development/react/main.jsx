// You can use the following code as an template to create a React Router
// Installation: npm install react-router-dom
// Full Reference: https://www.theodinproject.com/lessons/node-path-react-new-react-router

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import this line for React Router
import routes from "./routes"; // Import the file with the routes defined

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
{/* Following line will enable the react Router */}
    <RouterProvider router={router} />
  </StrictMode>,
);
