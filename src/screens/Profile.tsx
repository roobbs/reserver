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
    <div className="flex flex-1 flex-col justify-between gap-10 bg-gray-200 p-4 py-8">
      <section className="flex flex-col gap-8 rounded bg-white p-8 shadow-lg shadow-slate-500">
        <div className="text-xl font-bold text-blue-950">Tú información:</div>
        <div className="flex flex-wrap justify-around gap-8 rounded">
          <div className="group flex cursor-pointer flex-col items-center gap-1 rounded-sm border border-transparent bg-gray-100 p-8 px-16 text-slate-950 shadow-md shadow-slate-600 transition-all hover:border-slate-500 hover:bg-slate-900 hover:text-white">
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
          <div className="group flex cursor-pointer flex-col items-center gap-1 rounded-sm border border-transparent bg-gray-100 p-8 px-16 text-slate-950 shadow-md shadow-slate-600 transition-all hover:border-slate-500 hover:bg-slate-900 hover:text-white">
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
          <div className="group flex cursor-pointer flex-col items-center gap-1 rounded-sm border border-transparent bg-gray-100 p-8 px-16 text-slate-950 shadow-md shadow-slate-600 transition-all hover:border-slate-500 hover:bg-slate-900 hover:text-white">
            <MdHistory
              size={40}
              className="text-blue-950 transition-colors group-hover:text-white"
            />
            <div>Ver historial de citas</div>
          </div>
        </div>
      </section>

      <div
        onClick={() => {}}
        className="flex cursor-pointer items-center gap-2 self-center rounded-md border border-transparent bg-green-700 px-6 py-3 text-lg font-bold transition-all hover:border-green-500 hover:bg-green-800"
      >
        <MdOutlineManageSearch size={40} />
        Explora los servicios disponibles aqui!
      </div>

      {!user?.service_provider && (
        <Link
          to={"createBusiness"}
          className="flex cursor-pointer items-center gap-4 self-end rounded border border-transparent bg-blue-900 p-1 px-12 font-bold hover:border-slate-600 hover:bg-blue-950"
        >
          <TbBusinessplan size={25} />
          Pública tu propio negocio
        </Link>
      )}
      {business && <BusinessSection />}
    </div>
  );
}
