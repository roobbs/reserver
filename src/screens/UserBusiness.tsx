import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import { MdBusinessCenter } from "react-icons/md";
import ServiceSection from "../components/ServiceSection";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LuMessageSquare } from "react-icons/lu";

export default function UserBusiness() {
  const { business } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <main className="flex flex-1 flex-col justify-between bg-gray-100 p-4 py-8">
      <section className="flex flex-col gap-6 rounded-lg bg-white p-8 text-blue-900 shadow-lg shadow-slate-500">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-blue-950">Tú negocio</div>

          <div className="flex gap-3 self-center rounded-full bg-blue-950 p-2 px-6 text-3xl font-bold text-white shadow-sm shadow-slate-500">
            <MdBusinessCenter />
            {business?.name}
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-around gap-8">
          <div className="flex flex-col gap-2">
            <div className="font-bold">Tipo de negocio:</div>
            <div className="self-center">{business?.type}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold">Disponibilidad:</div>
            <div className="flex gap-1 self-center">
              {business?.availability?.map((day) => (
                <div key={day} className="rounded bg-gray-500 p-1 text-white">
                  {day}
                </div>
              ))}
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
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold text-blue-950">Información</div>
          <div className="flex justify-center gap-4">
            <div
              onClick={() => {
                navigate("/appointments");
              }}
              className="group flex cursor-pointer flex-col items-center gap-1 rounded-lg border border-slate-200 p-8 px-16 text-slate-950 shadow-sm shadow-slate-600 transition-colors duration-300 hover:border-transparent hover:bg-slate-900 hover:text-white"
            >
              <MdOutlineDateRange
                size={30}
                className="text-blue-950 transition-colors group-hover:text-white"
              />
              <div>
                Tú negocio tiene{" "}
                <strong className="text-2xl text-blue-800 transition-colors group-hover:text-blue-500">
                  0
                </strong>{" "}
                cita(s) pendiente(s)
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/appointments");
              }}
              className="group flex cursor-pointer flex-col items-center gap-1 rounded-lg border border-slate-200 p-8 px-16 text-slate-950 shadow-sm shadow-slate-600 transition-colors duration-300 hover:border-transparent hover:bg-slate-900 hover:text-white"
            >
              <LuMessageSquare
                size={30}
                className="text-blue-950 transition-colors group-hover:text-white"
              />
              <div>
                Tú negocio tiene{" "}
                <strong className="text-2xl text-blue-800 transition-colors group-hover:text-blue-500">
                  0
                </strong>{" "}
                mensaje(s) pendiente(s)
              </div>
            </div>
          </div>
        </div>
        <ServiceSection />
      </section>
    </main>
  );
}
