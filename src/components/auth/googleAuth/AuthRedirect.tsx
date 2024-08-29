import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function AuthRedirect() {
  const navigate = useNavigate();
  const { addUser, addBusiness, addBusinessesList, addAppointments } =
    useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const expiresIn = params.get("expiresIn");
    const userString = params.get("user");
    const businessString = params.get("business");
    const businessesListString = params.get("businessesList");
    const appointmentString = params.get("appointments");

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
          const appointments = appointmentString
            ? JSON.parse(appointmentString)
            : [];
          await addBusiness(business);
          addBusinessesList(businessesList);
          addAppointments(appointments);
          await addUser(user);
          navigate("/profile");
        } catch (error) {
          console.error("Failed to parse user:", error);
        }
      } else {
        console.error("Token not found");
      }
    })();
  }, [navigate, addUser, addBusiness, addBusinessesList, addAppointments]);

  return (
    <div className="background flex flex-1 items-center justify-center">
      Authenticating...
    </div>
  );
}
