import { useState, useContext } from "react";
import { Appointment } from "./auth/AuthContext";
import { AuthContext } from "./auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";

export default function AppointmentCard({
  appointment,
}: {
  appointment: Appointment;
}) {
  const [isCanceling, setIsCanceling] = useState(false);
  const { updateAppointment, user, conversations, addSingleConversation } =
    useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleSendMessage = async () => {
    const existingConversation = conversations.find(
      (conv) =>
        conv.user._id === user?._id &&
        conv.business._id === appointment.providerId._id,
    );

    if (existingConversation) {
      console.log("Conversación ya existe:", existingConversation);
      navigate("/messages");
    } else {
      try {
        const response = await fetch(`http://localhost:3000/api/conversation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user?._id,
            businessId: appointment.providerId._id,
          }),
        });

        const data = await response.json();

        console.log(data);
        if (data.success) {
          addSingleConversation(data.conversation);
          navigate("/messages");
        } else {
          alert("No se pudo crear la conversación");
        }
      } catch (error) {
        console.error("Error al crear la conversación:", error);
        alert("Ocurrió un error al crear la conversación");
      }
    }
  };

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-col gap-2 rounded border border-gray-400 bg-white p-4 text-blue-950 shadow-lg hover:bg-gray-50">
      <div className="mb-1 border-b border-slate-400 pb-1">
        <div className="flex items-center gap-2">
          <FaRegCalendarCheck size={30} />
          <strong className="text-lg">
            {new Date(appointment.date).toLocaleDateString("es-ES", options)}
          </strong>
        </div>
      </div>
      <div className="flex flex-col gap-0">
        <div className="text-sm">HORA:</div>
        <div className="flex items-center gap-2 self-center rounded border bg-slate-900 p-1 text-xl font-bold text-white">
          <IoIosTimer />
          {appointment.time}
        </div>
      </div>
      <div className="flex flex-col gap-0 border-b border-slate-400 pb-2">
        <div className="text-sm">SERVICIO ADQUIRIDO:</div>
        <div className="flex justify-around">
          <div className="text-xl font-bold">{appointment.providerId.name}</div>
          <div className="text-xl font-bold">
            $ {appointment.serviceId.price}
          </div>
        </div>
      </div>

      <div className="my-2 flex items-center justify-center gap-2 text-center font-bold text-slate-700">
        <MdOutlineWork /> {appointment.serviceId.name}
      </div>
      <div className="flex items-center justify-between">
        <div
          onClick={handleSendMessage}
          className="flex w-fit cursor-pointer items-center gap-2 rounded bg-blue-800 p-2 text-white transition-all hover:bg-blue-950"
        >
          <MdMessage size={20} />
          Enviar mensaje
        </div>
        <button
          className={`flex w-fit cursor-pointer items-center gap-2 rounded bg-red-800 p-2 text-sm text-white transition-all hover:bg-red-600 ${
            isCanceling ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={cancelAppointment}
          disabled={isCanceling}
        >
          <MdCancel size={20} />
          {isCanceling ? "Cancelando..." : "Cancelar"}
        </button>
      </div>
    </div>
  );
}
