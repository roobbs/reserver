import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";
import AuthError from "../screens/error/AuthError";
import HomeHeader from "./HomeHeader";
import Menu from "./Menu";
import SocketProvider from "./socket/SocketContext";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <SocketProvider>
      <HomeHeader name={user.first_name} />
      <Menu />
      <Outlet />
    </SocketProvider>
  ) : (
    <AuthError />
  );
};

export default PrivateRoute;
