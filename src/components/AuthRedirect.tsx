import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function AuthRedirect() {
  const navigate = useNavigate();
  const { addUser } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const expiresIn = params.get("expiresIn");
    const userString = params.get("user");
    console.log(token);
    console.log(userString);

    (async () => {
      if (token && userString) {
        localStorage.setItem("jwtToken", token);
        expiresIn && localStorage.setItem("jwtExpiresIn", expiresIn);

        try {
          const user = await JSON.parse(userString);
          console.log(user);
          await addUser(user);
          navigate("/home");
        } catch (error) {
          console.error("Failed to parse user:", error);
        }
      } else {
        console.error("Token not found");
      }
    })();
  }, [navigate, addUser]);

  return (
    <div className="background flex flex-1 items-center justify-center">
      Authenticating...
    </div>
  );
}
