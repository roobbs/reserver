import { useLocation } from "react-router-dom";
import { Service } from "../components/AuthContext";

export default function ServiceInfo() {
  const location = useLocation();
  const service = location.state.service as Service;

  const today = new Date().toISOString().split("T")[0];
  console.log(today);

  return (
    <div className="flex flex-1 flex-col gap-8 bg-white p-8 text-blue-900">
      <div className="border-b text-lg">
        Elige una fecha para reservar el siguiente servicio:
      </div>
      <div className="flex w-fit flex-col items-center gap-3 self-center p-3 text-lg text-blue-950">
        <div className="border-b border-slate-400 px-4 text-2xl">
          {service.name}
        </div>
        <p className="text-md font-bold italic">{service.description}</p>
        <p>Duration: {service.duration} minutes</p>
        <p>Price: ${service.price}</p>
      </div>
      <div className="flex flex-col items-center gap-1 self-center">
        <label htmlFor="date">Elige una fecha:</label>
        <input
          id="date"
          type="date"
          min={today}
          className="rounded bg-slate-900 p-4 text-white outline-none transition-all hover:bg-slate-600"
        />
      </div>
      <div className="cursor-pointer self-center rounded border border-transparent bg-emerald-500 p-4 text-xl text-white shadow-2xl transition-all hover:border-green-800 hover:bg-emerald-700">
        Crear Cita
      </div>
    </div>
  );
}
