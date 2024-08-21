import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";

export default function AuthRedirect() {
  const navigate = useNavigate();
  const { addUser, addBusiness, addBusinessesList } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const expiresIn = params.get("expiresIn");
    const userString = params.get("user");
    const businessString = params.get("business");
    const businessesListString = params.get("businessesList");

    (async () => {
      if (token && userString) {
        localStorage.setItem("jwtToken", token);
        expiresIn && localStorage.setItem("jwtExpiresIn", expiresIn);

        try {
          const user = await JSON.parse(userString);
          const business = businessString ? JSON.parse(businessString) : null;
          const businessesList = businessesListString
            ? JSON.parse(businessesListString)
            : [];
          console.log(user);
          console.log(business);
          await addBusiness(business);
          addBusinessesList(businessesList);
          await addUser(user);
          navigate("/home");
        } catch (error) {
          console.error("Failed to parse user:", error);
        }
      } else {
        console.error("Token not found");
      }
    })();
  }, [navigate, addUser, addBusiness, addBusinessesList]);

  return (
    <div className="background flex flex-1 items-center justify-center">
      Authenticating...
    </div>
  );
}
