import SignUpForm from "../components/SignUpForm";
import { CiCalendar } from "react-icons/ci";

export default function SignUp() {
  return (
    <div className="background relative flex flex-1 flex-col place-content-center place-items-center gap-4">
      <div className="text-3xl font-semibold text-cyan-400">Crea tu cuenta</div>
      <SignUpForm />
      <CiCalendar
        size={40}
        className="absolute"
        style={{ top: "20px", left: "30px" }}
      />
    </div>
  );
}
