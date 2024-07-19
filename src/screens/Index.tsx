import { MdDateRange } from "react-icons/md";
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

function Index() {
  const [logInForm, setLogInForm] = useState(true);
  return (
    <main className="min-h-screen text-black bg-gray-300 grid grid-cols-2 gap-4 p-8">
      <section className="flex flex-col gap-16">
        <div className="flex gap-4 items-center text-5xl font-bold self-center">
          <MdDateRange className="text-purple-800" size={55} /> RESERVER
        </div>
        <ul className="self-center text-lg italic text-gray-900 flex flex-col items-center gap-4">
          <li>Sistema de citas previas para mejorar tu negocio.</li>
          <li>Reserva citas cómodas e inmediatas para sus clientes.</li>
        </ul>

        <div className="text-4xl self-center font-bold">
          ¿Qué es <strong className="text-purple-800">RESERVER</strong>?
        </div>
        <div>
          <div>botones</div>
          <div>contenido de boton</div>
        </div>
      </section>

      <section className="flex flex-col pt-12 gap-5">
        <div className="flex self-center bg-gray-200 text-gray-500 rounded-lg shadow-lg">
          <div
            onClick={() => setLogInForm(false)}
            className={`cursor-pointer px-8 py-2 pr-3 rounded-lg transition-colors duration-300 ${
              logInForm ? "" : "bg-purple-700 text-white"
            }`}
          >
            Regístrate
          </div>
          <div
            onClick={() => setLogInForm(true)}
            className={`cursor-pointer px-8 py-2 pl-3 rounded-lg transition-colors duration-300 ${
              logInForm ? "bg-purple-700 text-white" : ""
            }`}
          >
            Ingresa Ahora
          </div>
        </div>
        {logInForm ? <LogInForm /> : <SignUpForm />}
      </section>
    </main>
  );
}

export default Index;
