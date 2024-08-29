import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ImProfile } from "react-icons/im";
import { MdOutlineAddBusiness } from "react-icons/md";
import { TbCalendarUser } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import "../styles/Home.css";

export default function Menu() {
  const [show, setShow] = useState("profile");
  const navigate = useNavigate();

  return (
    <>
      <section className="flex justify-around gap-12 bg-slate-900 px-8 py-2 text-white">
        <div
          onClick={() => {
            setShow("profile");
            navigate("/profile");
          }}
          className={
            show === "profile"
              ? "sectionButton border border-white bg-blue-950 transition-colors"
              : "sectionButton transition-colors"
          }
        >
          <ImProfile size={30} />
          Perfil
        </div>
        <div
          onClick={() => {
            setShow("business");
            navigate("/business");
          }}
          className={
            show === "business"
              ? "sectionButton border border-white bg-blue-950 transition-colors"
              : "sectionButton transition-colors"
          }
        >
          <MdOutlineAddBusiness size={30} /> Negocios
        </div>
        <div
          onClick={() => {
            setShow("appointments");
            navigate("/appointments");
          }}
          className={
            show === "appointments"
              ? "sectionButton border border-white bg-blue-950 transition-colors"
              : "sectionButton transition-colors"
          }
        >
          <TbCalendarUser size={30} /> Tus citas
        </div>
        <div
          onClick={() => {
            setShow("messages");
            navigate("/messages");
          }}
          className={
            show === "messages"
              ? "sectionButton border border-white bg-blue-950 transition-colors"
              : "sectionButton transition-colors"
          }
        >
          <TiMessages size={30} /> Tus mensajes
        </div>
      </section>
    </>
  );
}
