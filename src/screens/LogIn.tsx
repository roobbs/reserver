import LogInForm from "../components/LogInForm";
import { CiCalendar } from "react-icons/ci";

export default function LogIn() {
  return (
    <div className="background relative flex flex-1 flex-col place-content-center place-items-center gap-4 p-6">
      <div className="text-3xl font-semibold text-cyan-400">
        Ingresa a tu cuenta
      </div>
      <LogInForm />
      <CiCalendar
        size={40}
        className="absolute"
        style={{ top: "20px", left: "30px" }}
      />
    </div>
  );
}
