import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";
import ServiceCard from "./ServiceCard";
import { MdOutlineMedicalServices } from "react-icons/md";

export default function ServiceSection() {
  const { business } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col gap-4">
      <div className="text-xl font-bold text-blue-950">Tus servicios:</div>

      {business?.servicesOffered.length === 0 && (
        <div className="self-center rounded p-2 text-xl font-bold text-slate-800 shadow-sm shadow-slate-600">
          Actualmente no tienes ningun servicio, agrega uno!
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-8">
        {business?.servicesOffered &&
          business.servicesOffered.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              price={service.price}
              duration={service.duration}
            />
          ))}
        <div
          onClick={() => {
            navigate("newService");
          }}
          className="550p:w-full flex h-max cursor-pointer flex-col items-center justify-center gap-2 self-center justify-self-center rounded-2xl bg-blue-700 px-6 py-4 text-xl font-bold text-white transition-colors duration-500 hover:bg-slate-900"
        >
          <MdOutlineMedicalServices size={35} />
          Agrega un servicio
        </div>
      </div>
    </div>
  );
}
