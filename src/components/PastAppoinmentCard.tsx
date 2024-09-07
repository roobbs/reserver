import { Appointment } from "./auth/AuthContext";
import { IoIosTimer } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";

export default function PastAppointmentCard({
  appointment,
}: {
  appointment: Appointment;
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded border border-blue-900 bg-gray-100 p-4 text-blue-950">
      <div className="flex items-center gap-2">
        <FaRegCalendarCheck />
        Fecha:{" "}
        <strong>{new Date(appointment.date).toLocaleDateString()}</strong>
      </div>
      <div className="flex items-center gap-2">
        <IoIosTimer />
        Hora: <strong>{appointment.time}</strong>
      </div>
      <div className="flex items-center gap-2">
        Servicio:<strong> {appointment.providerId.name}</strong>
      </div>
      <div className="font-bold">$ {appointment.serviceId.price}</div>
      <div className="flex items-center gap-2">
        <MdOutlineWork />
        {appointment.serviceId.name}
      </div>
      {appointment.status === "canceled" && (
        <div className="flex items-center gap-2 self-center rounded bg-red-600 p-2 text-center text-white">
          <MdCancel />
          Cancelada
        </div>
      )}
    </div>
  );
}
