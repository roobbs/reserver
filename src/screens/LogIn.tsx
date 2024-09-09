import LogInForm from "../components/forms/LogInForm";
import { CiCalendar } from "react-icons/ci";
import GoogleAuthButton from "../components/auth/googleAuth/GoogleAuthButton";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-1 flex-col place-content-center place-items-center gap-4 bg-gray-100 p-6">
      <div className="text-2xl font-bold text-blue-950">
        Ingresa a tu cuenta
      </div>
      <GoogleAuthButton />
      <div className="text-gray-700">O ingresa aqui:</div>
      <LogInForm />
      <CiCalendar
        onClick={() => {
          navigate("/");
        }}
        size={40}
        className="absolute cursor-pointer text-slate-900 hover:text-blue-800"
        style={{ top: "20px", left: "30px" }}
      />
    </div>
  );
}
