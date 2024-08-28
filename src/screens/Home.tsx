import { useState } from "react";

import { ImProfile } from "react-icons/im";
import { MdOutlineAddBusiness } from "react-icons/md";
import { TbCalendarUser } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import "../styles/Home.css";
import Profile from "../components/Profile";
import Business from "../components/Business";
import Appointments from "../components/Appointments";
import Messages from "../components/Messages";

export default function Home() {
  const [show, setShow] = useState("profile");

  return (
    <>
      <main className="flex flex-1 flex-col">
        <section className="flex justify-around gap-12 bg-blue-950 px-8 py-2 text-white">
          <div
            onClick={() => setShow("profile")}
            className={
              show === "profile"
                ? "sectionButton border border-white transition-all"
                : "sectionButton transition-all"
            }
          >
            <ImProfile size={30} />
            Perfil
          </div>
          <div
            onClick={() => setShow("business")}
            className={
              show === "business"
                ? "sectionButton border border-white transition-all"
                : "sectionButton transition-all"
            }
          >
            <MdOutlineAddBusiness size={30} /> Negocios
          </div>
          <div
            onClick={() => setShow("appointments")}
            className={
              show === "appointments"
                ? "sectionButton border border-white transition-all"
                : "sectionButton transition-all"
            }
          >
            <TbCalendarUser size={30} /> Tus citas
          </div>
          <div
            onClick={() => setShow("messages")}
            className={
              show === "messages"
                ? "sectionButton border border-white transition-all"
                : "sectionButton transition-all"
            }
          >
            <TiMessages size={30} /> Tus mensajes
          </div>
        </section>
        {show === "profile" && (
          <Profile
            serviceFn={() => setShow("business")}
            appointmentFn={() => setShow("appointments")}
          />
        )}
        {show === "business" && <Business />}
        {show === "appointments" && <Appointments />}
        {show === "messages" && <Messages />}
      </main>
    </>
  );
}
