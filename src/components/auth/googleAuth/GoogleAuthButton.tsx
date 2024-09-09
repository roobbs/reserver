import { FcGoogle } from "react-icons/fc";

export default function GoogleAuthButton() {
  function authenticateUser() {
    window.location.href = "http://localhost:3000/api/auth/google";
  }

  return (
    <div
      onClick={authenticateUser}
      className="flex cursor-pointer items-center gap-2 rounded-md border border-blue-800 bg-white p-2 text-lg text-blue-900 transition-all hover:bg-blue-950 hover:text-white"
    >
      Inicia sesion con
      <FcGoogle size={40} />
    </div>
  );
}
