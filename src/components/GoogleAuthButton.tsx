import { FcGoogle } from "react-icons/fc";

export default function GoogleAuthButton() {
  function authenticateUser() {
    window.location.href = "http://localhost:3000/api/auth/google";
  }

  return (
    <div
      onClick={authenticateUser}
      className="flex cursor-pointer items-center gap-2 rounded-md border border-white p-2 text-lg transition-all hover:bg-white hover:text-blue-900"
    >
      Inicia sesion con
      <FcGoogle size={40} />
    </div>
  );
}
