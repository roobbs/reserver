import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./components/auth/AuthContext";

import Index from "./screens/Index";
import Error from "./screens/error/Error";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import AuthRedirect from "./components/auth/googleAuth/AuthRedirect";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./screens/Home";
import CreateBusiness from "./screens/CreateBusiness";
import CreateService from "./screens/CreateService";
import ServiceInfo from "./screens/ServiceInfo";

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
      children: [
        { index: true, element: <Home /> },
        { path: "provider", element: <CreateBusiness /> },
        { path: "newService", element: <CreateService /> },
        { path: "service/:id", element: <ServiceInfo /> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
