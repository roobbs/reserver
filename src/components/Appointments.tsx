import { useContext, useState } from "react";
import { AuthContext } from "./auth/AuthContext";
import AppointmentCard from "./AppointmentCard";
import PastAppointmentCard from "./PastAppoinmentCard";
import { IoToday } from "react-icons/io5";
import { IoIosToday } from "react-icons/io";
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";

export default function Appointments() {
  const { appointments } = useContext(AuthContext);
  const [showPastAppointments, setShowPastAppointments] = useState(false);

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
    <div className="flex flex-1 flex-col gap-8 p-6">
      {todayAppointments.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3 className="flex cursor-pointer items-center gap-2 self-center border-b border-white px-2 py-1 pl-4 text-3xl font-bold">
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
        <div className="flex flex-col gap-4">
          <h3 className="border-wh flex cursor-pointer items-center gap-2 border-b pl-4 text-3xl">
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
        <div className="flex flex-col gap-4 rounded bg-white p-4 text-slate-900">
          <h3
            onClick={() => setShowPastAppointments(!showPastAppointments)}
            className="flex cursor-pointer items-center gap-2 border-b border-b-slate-400 pb-2 text-3xl hover:text-blue-900"
          >
            Historial de citas{" "}
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
        <div className="self-center text-3xl">Aún no tienes ninguna cita</div>
      )}
    </div>
  );
}
