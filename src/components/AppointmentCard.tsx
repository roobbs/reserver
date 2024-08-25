import { Appointment } from "./auth/AuthContext";

export default function AppointmentCard({
  appointment,
}: {
  appointment: Appointment;
}) {
  return (
    <div className="rounded bg-white p-4 text-blue-950">
      <div>Tu cita es el dia: {appointment.date}</div>
      <div>a la siguiente hora: {appointment.time}</div>
      <div>Servicio adquirido: {appointment.providerId.name}</div>
      <div>$ {appointment.serviceId.price}</div>
      <div>{appointment.serviceId.name}</div>
    </div>
  );
}
