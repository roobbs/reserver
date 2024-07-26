import { useNavigate } from "react-router-dom";

export default function SignUpButton() {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer rounded-md border border-green-300 bg-teal-600 bg-opacity-90 px-4 py-2 font-bold text-white transition-all hover:bg-teal-700"
      onClick={() => navigate("/registro")}
    >
      Registrate
    </div>
  );
}
