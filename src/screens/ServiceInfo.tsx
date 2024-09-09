import { useLocation } from "react-router-dom";
import { Service, AuthContext } from "../components/auth/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiShoppingTag } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

export default function ServiceInfo() {
  const location = useLocation();
  const service = location.state.service as Service;
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { user, addSingleAppointment } = useContext(AuthContext);

  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const handleCreateAppointment = async () => {
    if (date !== "" && time !== "") {
      try {
        const response = await fetch(`http://localhost:3000/api/appointment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user?._id,
            providerId: service.providerId,
            serviceId: service._id,
            date,
            time,
          }),
        });

        const data = await response.json();

        if (data.success) {
          addSingleAppointment(data.appointment);
          navigate("/appointments");
          alert("Cita creada con éxito");
        } else {
          alert("Error al crear la cita");
        }
      } catch (error) {
        console.error("Error al crear la cita:", error);
        alert("Error al crear la cita");
      }
    } else {
      setMessage("Selecciona una fecha y una hora por favor");
    }
  };

  return (
    <main className="flex flex-1 flex-col justify-between gap-10 bg-gray-100 p-4 py-8">
      <section className="flex flex-col gap-8 rounded-lg bg-white p-8 text-gray-700 shadow-lg shadow-slate-500">
        <div className="pb-2 text-xl font-bold text-blue-950">
          Elige una fecha y hora para reservar el siguiente servicio:
        </div>
        <div className="flex justify-center gap-12">
          <div className="flex w-fit flex-col items-center gap-3 self-center rounded-lg border border-gray-400 p-4 text-lg text-blue-950">
            <div className="flex items-center gap-2 border-b border-slate-400 px-4 text-2xl font-bold text-blue-900">
              <CiShoppingTag /> {service.name}
            </div>
            <p className="text-md italic">{service.description}</p>
            <p className="flex items-center gap-2 text-black">
              <IoMdTime size={22} /> {service.duration} minutos
            </p>
            <p className="text-xl font-bold text-black">${service.price}</p>
          </div>
          <div className="flex flex-col items-center gap-1 self-center">
            <label htmlFor="date">Elige una fecha:</label>
            <input
              id="date"
              type="date"
              min={today}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-full bg-slate-900 p-4 text-white outline-none transition-all hover:bg-slate-600"
            />
            <label htmlFor="time">Elige una hora:</label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="rounded-full bg-slate-900 p-4 text-white outline-none transition-all hover:bg-slate-600"
            />
          </div>
        </div>
        <div className="self-center text-lg text-red-600">
          {(date === "" || time === "") && message}
        </div>
        <div
          onClick={handleCreateAppointment}
          className="cursor-pointer self-center rounded-xl border border-transparent bg-blue-900 p-4 text-xl text-white shadow-2xl transition-all hover:border-green-800 hover:bg-slate-900"
        >
          Crear Cita
        </div>
      </section>
    </main>
  );
}
