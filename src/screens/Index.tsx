import { MdDateRange } from "react-icons/md";
import SignUpButton from "../components/SignUpButton";
import LogInButton from "../components/LogInButton";
import InfoCard from "../components/InfoCard";

const info = [
  {
    title: "Gestiona las citas de tu negocio",
    info: [
      "- Puedes ver todas las citas por fechas",
      "- Ahora podras organizarte mejor",
    ],
  },
  {
    title: "Adminstra tus horarios",
    info: ["- Ahora podras saber cuando tendras tiempo libre"],
  },
  {
    title: "Mejora la experiencia de tus clientes",
    info: ["- Tus clientes no haran fila para obtener tus servicios"],
  },
  {
    title: "Aplicacion movil",
    info: [
      "- Tus clientes pueden reservar desde donde sea con la aplicaciòn mòvil",
    ],
  },
];

function Index() {
  return (
    <div className="flex flex-1 flex-col gap-12 bg-white py-6 pl-8 text-blue-950">
      <header className="flex items-center justify-between gap-4 px-16">
        <div className="racking-wide flex items-center justify-center gap-4 text-4xl font-semibold text-blue-800">
          <MdDateRange size={55} /> RESERVER
        </div>
        <div className="flex gap-4">
          <SignUpButton />
          <LogInButton />
        </div>
      </header>
      <main className="flex flex-col gap-12">
        <div className="mx-20 flex flex-col items-center gap-4 border-b border-t border-gray-500 p-6 text-xl">
          <div>Reserva citas cómodas e inmediatas para sus clientes.</div>
          <div className="text-2xl font-bold text-blue-800">
            El mejor software para agendar citas en Mexico
          </div>
        </div>
        <div className="self-center text-4xl font-bold">
          ¿Qué es{" "}
          <strong className="self-center text-blue-800">RESERVER</strong>?
        </div>
        <div className="flex justify-around gap-4">
          {info.map((el, index) => (
            <InfoCard key={index} title={el.title} info={el.info} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Index;
