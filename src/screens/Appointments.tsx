import { useContext, useState } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import AppointmentCard from "../components/AppointmentCard";
import PastAppointmentCard from "../components/PastAppoinmentCard";
import { IoToday } from "react-icons/io5";
import { IoIosToday } from "react-icons/io";
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";

export default function Appointments() {
  const { appointments } = useContext(AuthContext);
  const [showPastAppointments, setShowPastAppointments] = useState(true);

  const today = new Date().toISOString().split("T")[0];

  const pastAppointments = appointments
    ? appointments.filter(
        (a) => new Date(a.date) < new Date(today) || a.status === "canceled",
      )
    : [];
  const todayAppointments = appointments
    ? appointments.filter(
        (a) =>
          new Date(a.date).toISOString().split("T")[0] === today &&
          a.status !== "canceled",
      )
    : [];
  const futureAppointments = appointments
    ? appointments.filter(
        (a) => new Date(a.date) > new Date(today) && a.status !== "canceled",
      )
    : [];

  return (
    <main className="flex flex-1 flex-col justify-between gap-10 bg-gray-100 p-4 py-8">
      {todayAppointments.length > 0 && (
        <div className="flex flex-col gap-2 rounded-lg bg-white p-8 shadow-md shadow-slate-500">
          <h3 className="flex items-center gap-2 px-2 py-1 text-xl font-bold text-blue-950">
            <IoToday /> Cita(s) de Hoy
          </h3>
          <div className="flex justify-center gap-6">
            {todayAppointments.map((a, index) => (
              <AppointmentCard key={index} appointment={a} />
            ))}
          </div>
        </div>
      )}
      {futureAppointments.length > 0 && (
        <div className="flex flex-col gap-2 rounded-lg bg-white p-8 shadow-md shadow-slate-500">
          <h3 className="flex items-center gap-2 px-2 py-1 text-xl font-bold text-blue-950">
            <IoIosToday />
            Citas Pendientes:
          </h3>
          <div className="flex justify-center gap-6">
            {futureAppointments.map((a, index) => (
              <AppointmentCard key={index} appointment={a} />
            ))}
          </div>
        </div>
      )}
      {pastAppointments.length > 0 && (
        <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md shadow-slate-500">
          <h3
            onClick={() => setShowPastAppointments(!showPastAppointments)}
            className="flex cursor-pointer items-center justify-between gap-2 border-b border-b-slate-400 px-2 py-1 text-2xl font-bold text-blue-950 hover:text-blue-800"
          >
            <div className="flex items-center gap-2">
              <IoIosTimer />
              Historial de citas
            </div>
            {showPastAppointments ? <CiCircleChevUp /> : <CiCircleChevDown />}
          </h3>
          {showPastAppointments && (
            <div className="flex justify-center gap-6">
              {pastAppointments.map((a, index) => (
                <PastAppointmentCard key={index} appointment={a} />
              ))}
            </div>
          )}
        </div>
      )}
      {appointments?.length === 0 && (
        <h3 className="flex items-center gap-2 self-center px-2 py-1 text-xl font-bold text-blue-950">
          Aún no tienes ninguna cita
        </h3>
      )}
    </main>
  );
}
