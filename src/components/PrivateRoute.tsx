import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import AuthError from "../screens/AuthError";
import HomeHeader from "./HomeHeader";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <>
      <HomeHeader name={user.first_name} />
      <Outlet />
    </>
  ) : (
    <AuthError />
  );
};

export default PrivateRoute;
