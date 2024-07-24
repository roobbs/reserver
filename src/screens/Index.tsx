import { MdDateRange } from "react-icons/md";
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

function Index() {
  const [logInForm, setLogInForm] = useState(false);

  return (
    <>
      <div className="flex flex-1 justify-between gap-8 bg-indigo-950 py-6">
        <div className="flex flex-1 flex-col gap-12 pl-8">
          <header className="flex items-center justify-center gap-4 self-start p-2 text-4xl font-semibold tracking-wide text-cyan-400">
            <MdDateRange size={55} /> RESERVER
          </header>
          <main>
            <div className="mx-8 flex flex-col items-center gap-4 border-b border-t border-gray-400 p-6 text-xl">
              <div>Reserva citas cómodas e inmediatas para sus clientes.</div>
              <div className="font-bold text-green-400">
                El mejor software para agendar citas en Mexico
              </div>
            </div>
          </main>
        </div>
        <section className="flex flex-col gap-1 transition-all">
          <div className="mr-12 flex items-center gap-8">
            <div className="text-4xl text-cyan-300">
              {logInForm ? "Ingresa Ahora" : "Regístrate"}
            </div>
            <div
              className="text-grey-700 cursor-pointer rounded p-2 font-bold tracking-wider transition-all hover:bg-white hover:text-blue-950"
              onClick={() => setLogInForm(!logInForm)}
            >
              {!logInForm ? "Ingresa Ahora" : "Regístrate"}
            </div>
          </div>
          {logInForm ? <LogInForm /> : <SignUpForm />}
        </section>
      </div>
    </>
  );
}

export default Index;
