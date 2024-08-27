import { useState, useContext } from "react";
import { Appointment } from "./auth/AuthContext";
import { AuthContext } from "./auth/AuthContext";

export default function AppointmentCard({
  appointment,
}: {
  appointment: Appointment;
}) {
  const [isCanceling, setIsCanceling] = useState(false);
  const { updateAppointment } = useContext(AuthContext);

  const cancelAppointment = async () => {
    setIsCanceling(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/appointment/${appointment._id}/cancel`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        updateAppointment(appointment._id);
      } else {
        alert("No se pudo cancelar la cita");
      }
    } catch (error) {
      console.error("Error al cancelar la cita:", error);
      alert("Ocurrió un error al cancelar la cita");
    } finally {
      setIsCanceling(false);
    }
  };

  return (
    <div className="rounded bg-white p-4 text-blue-950">
      <div>Tu cita es el dia: {appointment.date}</div>
      <div>a la siguiente hora: {appointment.time}</div>
      <div>Servicio adquirido: {appointment.providerId.name}</div>
      <div>$ {appointment.serviceId.price}</div>
      <div>{appointment.serviceId.name}</div>
      <div className="flex items-center justify-between">
        <div className="w-fit cursor-pointer rounded bg-emerald-600 p-2 text-white transition-all hover:bg-emerald-700">
          Enviar mensaje
        </div>
        <div
          className={`w-fit cursor-pointer rounded bg-red-800 p-2 text-sm text-white transition-all hover:bg-red-600 ${
            isCanceling ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={cancelAppointment}
          disabled={isCanceling}
        >
          {isCanceling ? "Cancelando..." : "Cancelar cita"}
        </div>
      </div>
    </div>
  );
}
