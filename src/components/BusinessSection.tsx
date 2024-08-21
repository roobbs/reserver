import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";
import { MdBusinessCenter } from "react-icons/md";
import ServiceSection from "./ServiceSection";

export default function BusinessSection() {
  const { user, business } = useContext(AuthContext);

  return (
    <section className="flex flex-col gap-8 rounded bg-white p-8 px-12 text-blue-900 shadow">
      <div className="font-bold text-slate-500">
        {user?.first_name}, esta es la información tu negocio:
      </div>
      <div className="flex flex-wrap items-start justify-around gap-8">
        <div className="flex gap-3 p-2 text-3xl font-bold shadow-sm shadow-slate-500">
          <MdBusinessCenter />
          {business?.name}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Tipo de negocio:</div>
          <div className="self-center">{business?.type}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Disponibilidad:</div>
          <div className="self-center">
            {business?.availability?.map((day) => <div key={day}>{day}</div>)}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Tú número de contacto:</div>
          <div className="self-center">{business?.contactInfo}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Tú ubicación:</div>
          <div className="self-center">{business?.location}</div>
        </div>
      </div>
      <ServiceSection />
    </section>
  );
}
