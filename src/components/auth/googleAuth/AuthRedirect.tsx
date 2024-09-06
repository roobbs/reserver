import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function AuthRedirect() {
  const navigate = useNavigate();
  const {
    addUser,
    addBusiness,
    addBusinessesList,
    addAppointments,
    addConversations,
    addBusinessConversations,
  } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const expiresIn = params.get("expiresIn");
    const userString = params.get("user");
    const businessString = params.get("business");
    const businessesListString = params.get("businessesList");
    const appointmentString = params.get("appointments");
    const conversationsString = params.get("conversations");
    const businessConversationsString = params.get("businessConversations");

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
          const businessConversationsList = businessConversationsString
            ? JSON.parse(businessConversationsString)
            : null;
          const appointments = appointmentString
            ? JSON.parse(appointmentString)
            : [];
          const conversations = conversationsString
            ? JSON.parse(conversationsString)
            : [];
          addBusiness(business);
          addBusinessesList(businessesList);
          addAppointments(appointments);
          addConversations(conversations);
          addBusinessConversations(businessConversationsList);
          addUser(user);
          console.log(user);
          console.log(conversations);
          console.log(businessConversationsList);
          navigate("/profile");
        } catch (error) {
          console.error("Failed to parse user:", error);
        }
      } else {
        console.error("Token not found");
      }
    })();
  }, [
    navigate,
    addUser,
    addBusiness,
    addBusinessesList,
    addAppointments,
    addConversations,
    addBusinessConversations,
  ]);

  return (
    <div className="background flex flex-1 items-center justify-center">
      Authenticating...
    </div>
  );
}
