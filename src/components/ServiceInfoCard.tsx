import { Service } from "./AuthContext";

interface ServiceInfoProps {
  service: Service;
}

export default function ServiceInfoCard({ service }: ServiceInfoProps) {
  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded border border-slate-400 p-4 shadow-md shadow-slate-600 transition-all hover:bg-blue-950 hover:text-white">
      <div className="self-center text-lg font-bold">{service.name}</div>
      <div className="italic">{service.description} </div>
      <div>Listo en: {service.duration}min.</div>
      <div className="self-center text-2xl font-bold">${service.price} </div>
    </div>
  );
}
