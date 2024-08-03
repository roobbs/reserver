import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

interface HeaderProps {
  name: string;
}

export default function HomeHeader({ name }: HeaderProps) {
  const { logOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <header className="relative flex items-center justify-between bg-blue-950 px-12 py-2 last:flex">
      <CiCalendar
        size={35}
        onClick={() => {
          navigate("/home");
        }}
        className="hover:text-cyan-400"
      />
      <input type="checkbox" id="check" className="hidden" />
      <label
        htmlFor="check"
        className="flex cursor-pointer items-center gap-2 rounded-md border border-transparent p-1 px-6 text-lg font-bold transition-all hover:border-cyan-400"
      >
        {name} <CiUser size={30} className="rounded-full bg-blue-700 p-1" />
      </label>
      <div className="closeSesion absolute hidden rounded-b-lg border border-cyan-600 bg-white p-4 text-lg font-bold text-blue-900">
        <div
          className="cursor-pointer hover:text-blue-700"
          onClick={() => {
            logOutUser();
            navigate("/");
          }}
        >
          Cerrar Sesión
        </div>
      </div>
    </header>
  );
}
