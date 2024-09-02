import { Business } from "./auth/AuthContext";
import ServiceInfoCard from "./ServiceInfoCard";

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded bg-white p-4 text-slate-800 shadow-lg shadow-slate-500">
      <div className="self-center text-2xl font-bold">{business.name}</div>
      <div className="flex justify-around">
        <div className="flex gap-4 text-lg">
          <div className="font-bold">{business.type}</div>
          <div className="text-gray-500">{business.location}</div>
          <div className="italic text-black">"{business.description}"</div>
        </div>

        <div className="flex gap-4">
          {business.availability?.map((day, index) => (
            <div key={index} className="cursor-pointer hover:text-blue-900">
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="self-start">
        {business.ratings ? "Aun no tiene reseñas" : business.ratings}
      </div>

      <div className="border-grey-900 flex flex-wrap justify-center gap-8 border-t-2 py-4">
        <div className="font-bold">Servicios:</div>
        {business.servicesOffered.length > 0 &&
          business.servicesOffered.map((service, index) => (
            <ServiceInfoCard key={index} service={service} />
          ))}
      </div>
      <div className="cursor-pointer self-center rounded border border-gray-900 bg-green-600 p-2 text-white hover:border-green-800 hover:bg-emerald-600">
        Ver más de este negocio
      </div>
    </div>
  );
}
