import { useState } from "react";

import { ImProfile } from "react-icons/im";
import { MdOutlineAddBusiness } from "react-icons/md";
import { TbCalendarUser } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import "../styles/Home.css";
import Profile from "../components/Profile";
import Business from "../components/Business";
import Dates from "../components/Dates";
import Messages from "../components/Messages";

export default function Home() {
  const [show, setShow] = useState("profile");

  return (
    <>
      <main className="flex flex-1 flex-col">
        <section className="flex justify-around gap-12 bg-white px-8 py-2 text-blue-900">
          <div
            onClick={() => setShow("profile")}
            className={
              show === "profile"
                ? "sectionButton bg-blue-950 text-white transition-all"
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
                ? "sectionButton bg-blue-950 text-white transition-all"
                : "sectionButton transition-all"
            }
          >
            <MdOutlineAddBusiness size={30} /> Negocios
          </div>
          <div
            onClick={() => setShow("dates")}
            className={
              show === "dates"
                ? "sectionButton bg-blue-950 text-white transition-all"
                : "sectionButton transition-all"
            }
          >
            <TbCalendarUser size={30} /> Tus citas
          </div>
          <div
            onClick={() => setShow("messages")}
            className={
              show === "messages"
                ? "sectionButton bg-blue-950 text-white transition-all"
                : "sectionButton transition-all"
            }
          >
            <TiMessages size={30} /> Tus mensajes
          </div>
        </section>
        {show === "profile" && <Profile fn={() => setShow("business")} />}
        {show === "business" && <Business />}
        {show === "dates" && <Dates />}
        {show === "messages" && <Messages />}
      </main>
    </>
  );
}
