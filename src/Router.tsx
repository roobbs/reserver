import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./screens/Index";
import Error from "./screens/Error";
import SignUp from "./screens/SignUp";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <Error />,
      children: [
        // { index: true, element: <Home /> },
        // { path: "posts", element: <Posts /> },
      ],
    },
    {
      path: "/registro",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}
