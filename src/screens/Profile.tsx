import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import { TbBusinessplan } from "react-icons/tb";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import BusinessSection from "../components/BusinessSection";
import { LuMessageSquare } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";

export default function Profile() {
  const { user, business, appointments } = useContext(AuthContext);

  const today = new Date().toISOString().split("T")[0];
  const pendingAppointments = appointments
    ? appointments.filter(
        (a) => new Date(a.date) >= new Date(today) && a.status !== "canceled",
      )
    : [];
  return (
    <div className="flex flex-1 flex-col justify-between gap-10 bg-gray-100 p-4 py-8">
      <section className="flex flex-col gap-12 rounded-lg bg-white p-8 shadow-lg shadow-slate-500">
        <div className="text-xl font-bold text-blue-950">Tú información</div>
        <div className="flex flex-wrap justify-around gap-8 rounded">
          <div className="group flex cursor-pointer flex-col items-center gap-1 rounded-lg border border-slate-200 p-8 px-16 text-slate-950 shadow-sm shadow-slate-600 transition-colors duration-300 hover:border-transparent hover:bg-slate-900 hover:text-white">
            <LuMessageSquare
              size={40}
              className="text-blue-950 transition-colors group-hover:text-white"
            />
            <div>
              Tienes{" "}
              <strong className="text-2xl text-blue-800 transition-colors group-hover:text-blue-500">
                0
              </strong>{" "}
              mensajes
            </div>
          </div>
          <div className="group flex cursor-pointer flex-col items-center gap-1 rounded-lg border border-slate-200 p-8 px-16 text-slate-950 shadow-sm shadow-slate-600 transition-colors duration-300 hover:border-transparent hover:bg-slate-900 hover:text-white">
            <MdOutlineDateRange
              size={40}
              className="text-blue-950 transition-colors group-hover:text-white"
            />
            <div>
              Tienes{" "}
              <strong className="text-2xl text-blue-800 transition-colors group-hover:text-blue-500">
                {pendingAppointments?.length}
              </strong>{" "}
              cita(s) pendiente(s)
            </div>
          </div>
          <div className="group flex cursor-pointer flex-col items-center gap-1 rounded-lg border border-slate-200 p-8 px-16 text-slate-950 shadow-sm shadow-slate-600 transition-colors duration-300 hover:border-transparent hover:bg-slate-900 hover:text-white">
            <MdHistory
              size={40}
              className="text-blue-950 transition-colors group-hover:text-white"
            />
            <div>Ver historial de citas</div>
          </div>
        </div>
        <div
          onClick={() => {}}
          className="flex cursor-pointer items-center gap-2 self-center rounded-full bg-gray-800 px-8 py-3 text-lg font-bold text-white transition duration-300 hover:bg-slate-950"
        >
          <MdOutlineManageSearch size={40} />
          Explora los servicios disponibles aqui!
        </div>
        {!user?.service_provider && (
          <Link
            to={"createBusiness"}
            className="flex cursor-pointer items-center gap-2 self-center rounded-full bg-blue-800 px-8 py-3 text-lg font-bold text-white transition duration-300 hover:bg-blue-900"
          >
            <TbBusinessplan size={25} />
            Pública tu propio negocio
          </Link>
        )}
      </section>

      {business && <BusinessSection />}
    </div>
  );
}
