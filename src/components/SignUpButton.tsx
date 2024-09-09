import { useNavigate } from "react-router-dom";

export default function SignUpButton() {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer rounded-md border bg-slate-950 bg-opacity-90 px-4 py-2 font-bold text-white transition-all hover:bg-blue-900"
      onClick={() => navigate("/registro")}
    >
      Registrate
    </div>
  );
}
