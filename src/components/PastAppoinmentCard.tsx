import { Appointment } from "./auth/AuthContext";

export default function PastAppointmentCard({
  appointment,
}: {
  appointment: Appointment;
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded border border-blue-900 bg-gray-100 p-4 text-blue-950">
      <div>
        Fecha:{" "}
        <strong>{new Date(appointment.date).toLocaleDateString()}</strong>
      </div>
      <div>
        Hora: <strong>{appointment.time}</strong>
      </div>
      <div>
        Servicio:<strong> {appointment.providerId.name}</strong>
      </div>
      <div className="font-bold">$ {appointment.serviceId.price}</div>
      <div>{appointment.serviceId.name}</div>
      {appointment.status === "canceled" && (
        <div className="self-center rounded bg-red-600 p-2 text-center text-white">
          Cancelada
        </div>
      )}
    </div>
  );
}
