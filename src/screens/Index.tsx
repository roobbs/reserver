import { MdDateRange } from "react-icons/md";
import SignUpButton from "../components/SignUpButton";
import LogInButton from "../components/LogInButton";

function Index() {
  return (
    <div className="background gap-12py-6 flex flex-1 flex-col pl-8 text-white">
      <header className="flex items-center justify-between gap-4 px-16 py-8">
        <div className="racking-wide flex items-center justify-center gap-4 text-4xl font-semibold text-cyan-300">
          <MdDateRange size={55} /> RESERVER
        </div>
        <div className="flex gap-4">
          <SignUpButton />
          <LogInButton />
        </div>
      </header>
      <main className="flex flex-col gap-12">
        <div className="mx-20 flex flex-col items-center gap-4 border-b border-t border-gray-200 p-6 text-xl">
          <div>Reserva citas cómodas e inmediatas para sus clientes.</div>
          <div className="text-2xl font-bold text-cyan-400">
            El mejor software para agendar citas en Mexico
          </div>
        </div>
        <div className="self-center text-4xl font-bold">
          ¿Qué es{" "}
          <strong className="self-center text-cyan-400">RESERVER</strong>?
        </div>
        <div>cajas</div>
      </main>
    </div>
  );
}

export default Index;
