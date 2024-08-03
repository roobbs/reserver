import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { ImProfile } from "react-icons/im";
import { MdOutlineAddBusiness } from "react-icons/md";
import { TbCalendarUser } from "react-icons/tb";
import "../styles/Home.css";

export default function Home() {
  const [show, setShow] = useState("profile");
  const { user } = useContext(AuthContext);

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
        </section>
        {user && <div>bienvenido {user.first_name}</div>}
      </main>
    </>
  );
}
