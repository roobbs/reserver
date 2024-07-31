import LogInForm from "../components/LogInForm";
import { CiCalendar } from "react-icons/ci";
import GoogleAuthButton from "../components/GoogleAuthButton";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  return (
    <div className="background relative flex flex-1 flex-col place-content-center place-items-center gap-4 p-6">
      <div className="text-3xl font-semibold text-cyan-400">
        Ingresa a tu cuenta
      </div>
      <GoogleAuthButton />
      <div className="text-gray-400">O ingresa aqui:</div>
      <LogInForm />
      <CiCalendar
        onClick={() => {
          navigate("/");
        }}
        size={40}
        className="absolute cursor-pointer hover:text-emerald-400"
        style={{ top: "20px", left: "30px" }}
      />
    </div>
  );
}
