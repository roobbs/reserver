import { useState } from "react";

import { ImProfile } from "react-icons/im";
import { MdOutlineAddBusiness } from "react-icons/md";
import { TbCalendarUser } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import "../styles/Home.css";

export default function Menu() {
  const [show, setShow] = useState("profile");

  return (
    <>
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
    </>
  );
}
