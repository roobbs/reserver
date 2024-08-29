import { Service } from "./auth/AuthContext";
import { useNavigate } from "react-router-dom";

interface ServiceInfoProps {
  service: Service;
}

export default function ServiceInfoCard({ service }: ServiceInfoProps) {
  const navigate = useNavigate();

  function goToService() {
    if (service._id) {
      navigate(`service/${service._id}`, { state: { service } });
    }
  }

  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded border border-slate-400 p-4 shadow-md shadow-slate-600 transition-all hover:bg-blue-950 hover:text-white">
      <div className="self-center text-lg font-bold">{service.name}</div>
      <div className="italic">{service.description} </div>
      <div>Tarda: {service.duration}min.</div>
      <div className="self-center text-2xl font-bold">${service.price} </div>
      <div
        onClick={() => goToService()}
        className="m-1 self-center rounded border border-white bg-emerald-800 p-1 px-2 text-white shadow-sm transition-all hover:border-green-900 hover:bg-emerald-500"
      >
        RESERVAR
      </div>
    </div>
  );
}
