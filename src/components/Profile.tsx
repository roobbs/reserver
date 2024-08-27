import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";
import { TbBusinessplan } from "react-icons/tb";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import BusinessSection from "./BusinessSection";

interface ProfileProps {
  serviceFn: () => void;
  appointmentFn: () => void;
}

export default function Profile({ serviceFn, appointmentFn }: ProfileProps) {
  const { user, business, appointments } = useContext(AuthContext);

  const today = new Date().toISOString().split("T")[0];
  const pendingAppointments = appointments
    ? appointments.filter(
        (a) => new Date(a.date) >= new Date(today) && a.status !== "canceled",
      )
    : [];
  return (
    <div className="flex flex-1 flex-col justify-between gap-10 p-4 py-8">
      <section className="flex flex-col gap-4 rounded bg-white p-8">
        <div className="text-xl font-bold text-blue-900">Tú información:</div>
        <div className="flex justify-around rounded">
          <div className="rounded-sm bg-slate-100 p-12 text-slate-600 shadow-sm shadow-slate-600 transition-all hover:bg-slate-900 hover:text-white">
            Tienes 0 mensajes
          </div>
          <div
            onClick={appointmentFn}
            className="cursor-pointer rounded-sm bg-slate-100 p-12 text-slate-600 shadow-sm shadow-slate-600 transition-all hover:bg-slate-900 hover:text-white"
          >
            Tienes {pendingAppointments?.length} citas pendiente(s)
          </div>
          <div className="rounded-sm bg-slate-100 p-12 text-slate-600 shadow-sm shadow-slate-600 transition-all hover:bg-slate-900 hover:text-white">
            Ver historial de citas
          </div>
        </div>
      </section>

      <div
        onClick={serviceFn}
        className="flex cursor-pointer items-center gap-2 self-center rounded-md border border-transparent bg-emerald-600 px-4 py-1 text-lg transition-all hover:border-green-500 hover:bg-emerald-800"
      >
        <MdOutlineManageSearch size={30} />
        Explora los servicios disponibles aqui!
      </div>

      {!user?.service_provider && (
        <Link
          to={"provider"}
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
