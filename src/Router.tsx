import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./components/AuthContext";

import Index from "./screens/Index";
import Error from "./screens/Error";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import AuthRedirect from "./components/AuthRedirect";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./screens/Home";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <Error />,
    },
    {
      path: "/registro",
      element: <SignUp />,
    },
    {
      path: "/ingresar",
      element: <LogIn />,
    },
    {
      path: "/auth",
      element: <AuthRedirect />,
    },
    {
      path: "/home",
      element: <PrivateRoute />,
      children: [{ path: "/home", element: <Home /> }],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
