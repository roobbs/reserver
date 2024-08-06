import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function AuthRedirect() {
  const navigate = useNavigate();
  const { addUser, addBusiness } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const expiresIn = params.get("expiresIn");
    const userString = params.get("user");
    const businessString = params.get("business");

    (async () => {
      if (token && userString) {
        localStorage.setItem("jwtToken", token);
        expiresIn && localStorage.setItem("jwtExpiresIn", expiresIn);

        try {
          const user = await JSON.parse(userString);
          const business = await JSON.parse(businessString);
          console.log(user);
          console.log(business);
          await addBusiness(business);
          await addUser(user);
          navigate("/home");
        } catch (error) {
          console.error("Failed to parse user:", error);
        }
      } else {
        console.error("Token not found");
      }
    })();
  }, [navigate, addUser, addBusiness]);

  return (
    <div className="background flex flex-1 items-center justify-center">
      Authenticating...
    </div>
  );
}
