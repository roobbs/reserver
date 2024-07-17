import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./screens/Index";
import Error from "./screens/Error";

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
  ]);

  return <RouterProvider router={router} />;
}
