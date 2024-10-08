import { useNavigate } from "react-router-dom";

export default function LogInButton() {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer rounded-md border border-blue-900 bg-white px-4 py-2 font-bold text-blue-900 transition-all hover:bg-blue-950 hover:text-white"
      onClick={() => navigate("/ingresar")}
    >
      Ingresa Ahora
    </div>
  );
}
