import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";
import AuthError from "../screens/error/AuthError";
import SocketProvider from "./socket/SocketContext";
import MainHeader from "./MainHeader";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <SocketProvider>
      <MainHeader />
      <Outlet />
    </SocketProvider>
  ) : (
    <AuthError />
  );
};

export default PrivateRoute;
