import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";
import CreatedBy from "./CreatedBy";
import { TbUserSquareRounded } from "react-icons/tb";
import { TbShoppingBagSearch } from "react-icons/tb";
import { TbCalendarUser } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import "../styles/Home.css";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function MainHeader() {
  const { logOutUser, user, business } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <CreatedBy />
      <header className="550p:px-4 relative flex items-center justify-between border bg-white px-12 py-1 text-blue-950 shadow-sm last:flex">
        <input type="checkbox" id="checkMenu" className="hidden" />
        <label htmlFor="checkMenu" className="headerIcons">
          <IoMenu className="menuIcon" size={40} />
          <IoIosCloseCircleOutline className="closeIcon" size={40} />
        </label>

        <div className="flex cursor-none items-center gap-1 text-cyan-900 transition-colors duration-300 hover:text-emerald-500">
          <CiCalendar size={35} />
          <div className="text-xl font-bold">RESERVER</div>
        </div>
        <ul className="menuContainer 1180p:gap-6 1180p:py-8 flex justify-around gap-12 px-8 py-2 text-sm text-slate-900">
          <li
            onClick={() => navigate("/profile")}
            className={
              isActive("/profile")
                ? "sectionButton border border-blue-950 bg-blue-950 text-white transition-colors"
                : "sectionButton text-blue-900 transition-colors"
            }
          >
            <TbUserSquareRounded size={30} />
            Perfil
          </li>
          {business && (
            <li
              onClick={() => navigate("/myBusiness")}
              className={
                isActive("/myBusiness")
                  ? "sectionButton border border-blue-950 bg-blue-950 text-white transition-colors"
                  : "sectionButton text-blue-900 transition-colors"
              }
            >
              <ImStatsBars size={30} />
              Mi negocio
            </li>
          )}
          <div
            onClick={() => navigate("/services")}
            className={
              isActive("/services")
                ? "sectionButton border border-blue-950 bg-blue-950 text-white transition-colors"
                : "sectionButton text-blue-900 transition-colors"
            }
          >
            <TbShoppingBagSearch size={30} /> Servicios
          </div>
          <div
            onClick={() => navigate("/appointments")}
            className={
              isActive("/appointments")
                ? "sectionButton border border-blue-950 bg-blue-950 text-white transition-colors"
                : "sectionButton text-blue-900 transition-colors"
            }
          >
            <TbCalendarUser size={30} /> Citas
          </div>
          <div
            onClick={() => navigate("/messages")}
            className={
              isActive("/messages")
                ? "sectionButton border border-blue-950 bg-blue-950 text-white transition-colors"
                : "sectionButton text-blue-900 transition-colors"
            }
          >
            <MdOutlineMessage size={30} /> Mensajes
          </div>
        </ul>
        <input type="checkbox" id="check" className="hidden" />
        <label
          htmlFor="check"
          className="550p:px-3 flex cursor-pointer items-center gap-2 rounded-lg border border-transparent p-1 px-6 text-lg transition-all hover:border-blue-900"
        >
          {user?.first_name}
          <CiUser
            size={30}
            className="rounded-full border border-gray-400 p-1 text-blue-900"
          />
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
    </>
  );
}
