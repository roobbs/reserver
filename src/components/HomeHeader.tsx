import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";

interface HeaderProps {
  name: string;
}

export default function HomeHeader({ name }: HeaderProps) {
  const { logOutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <header className="relative flex items-center justify-between bg-white px-12 py-1 text-blue-950 last:flex">
      <CiCalendar
        size={35}
        onClick={() => {
          navigate("/home");
        }}
        className="hover:text-emerald-600"
      />
      <input type="checkbox" id="check" className="hidden" />
      <label
        htmlFor="check"
        className="flex cursor-pointer items-center gap-2 border-b border-transparent p-1 px-6 text-lg font-bold transition-all hover:border-blue-900"
      >
        {name}{" "}
        <CiUser size={30} className="rounded-full bg-blue-700 p-1 text-white" />
      </label>
      <div className="closeSesion absolute hidden rounded-b-lg border border-white bg-indigo-950 p-4 py-8 text-lg font-bold text-slate-300">
        <div
          className="cursor-pointer hover:text-white"
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
