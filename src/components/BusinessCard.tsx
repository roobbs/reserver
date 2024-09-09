import { Business } from "./auth/AuthContext";
import ServiceInfoCard from "./ServiceInfoCard";
import { MdBusinessCenter } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded border border-gray-500 bg-white p-4 text-slate-800 shadow-md">
      <div className="flex items-center gap-3 self-center rounded-full bg-blue-950 p-1 px-3 text-lg font-bold text-white shadow-sm shadow-slate-500">
        <MdBusinessCenter />
        {business.name}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col items-center justify-around rounded-xl border border-gray-400 bg-white p-4">
          <div className="flex items-center gap-2 text-xl font-bold text-black">
            {business.type}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <IoLocationOutline />
            {business.location}
          </div>
          <div className="text-sm italic text-black">
            "{business.description}"
          </div>

          <div className="flex gap-4">
            {business.availability?.map((day, index) => (
              <div
                key={index}
                className="cursor-pointer rounded bg-gray-500 p-1 text-sm text-white"
              >
                {day.slice(0, 3)}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 self-center">
            <FaStar color="gold" />
            {business.ratings ? "Aun no tiene reseñas" : business.ratings}
          </div>
        </div>

        {business.servicesOffered.length > 0 &&
          business.servicesOffered.map((service, index) => (
            <ServiceInfoCard key={index} service={service} />
          ))}
      </div>
    </div>
  );
}
