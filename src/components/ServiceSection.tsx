import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  const { business } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col gap-4">
      <div className="text-xl font-bold">Tus servicios:</div>

      {!business?.servicesOffered && (
        <div className="self-center rounded p-2 text-xl font-bold text-slate-800 shadow-sm shadow-slate-600">
          Actualmente no tienes ningun servicio, agrega uno!
        </div>
      )}

      <div className="flex gap-8">
        {business?.servicesOffered &&
          business.servicesOffered.map((service) => (
            <ServiceCard
              name={service.name}
              price={service.price}
              duration={service.duration}
            />
          ))}
      </div>

      <div
        onClick={() => {
          navigate("newService");
        }}
        className="flex cursor-pointer items-center gap-2 self-center rounded-md border border-transparent bg-emerald-600 px-4 py-1 text-lg text-white transition-all hover:border-green-500 hover:bg-emerald-800"
      >
        Agrega un servicio
      </div>
    </div>
  );
}
