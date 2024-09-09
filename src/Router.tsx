import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./components/auth/AuthContext";

import Index from "./screens/Index";
import Error from "./screens/error/Error";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import AuthRedirect from "./components/auth/googleAuth/AuthRedirect";
import PrivateRoute from "./components/PrivateRoute";
import UserBusiness from "./screens/UserBusiness";
import Profile from "./screens/Profile";
import Appointments from "./screens/Appointments";

import Business from "./screens/Business";
import Messages from "./screens/Messages";

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
      path: "/profile",
      element: <PrivateRoute />,
      children: [
        { index: true, element: <Profile /> },
        { path: "createBusiness", element: <CreateBusiness /> },
      ],
    },
    {
      path: "/services",
      element: <PrivateRoute />,
      children: [
        { index: true, element: <Business /> },
        { path: "service/:id", element: <ServiceInfo /> },
      ],
    },
    {
      path: "/myBusiness",
      element: <PrivateRoute />,
      children: [
        { index: true, element: <UserBusiness /> },
        { path: "newService", element: <CreateService /> },
      ],
    },
    {
      path: "/appointments",
      element: <PrivateRoute />,
      children: [{ index: true, element: <Appointments /> }],
    },
    {
      path: "/messages",
      element: <PrivateRoute />,
      children: [{ index: true, element: <Messages /> }],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
