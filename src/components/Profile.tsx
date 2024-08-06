import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { TbBusinessplan } from "react-icons/tb";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";

interface ProfileProps {
  fn: () => void;
}

export default function Profile({ fn }: ProfileProps) {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-1 flex-col justify-between p-4 py-8">
      <div className="flex justify-around">
        <div className="rounded-sm bg-white p-12 text-slate-600">
          Tienes 0 mensajes
        </div>
        <div className="rounded-sm bg-white p-12 text-slate-600">
          Tienes 0 citas pendientes
        </div>
        <div className="rounded-sm bg-white p-12 text-slate-600">
          Ver historial de citas
        </div>
      </div>

      <div
        onClick={fn}
        className="flex cursor-pointer items-center gap-2 self-center rounded-md border border-transparent bg-emerald-600 px-4 py-1 text-lg transition-all hover:border-green-500 hover:bg-emerald-800"
      >
        <MdOutlineManageSearch size={30} />
        Busca un servicio aqui!
      </div>

      {!user?.service_provider && (
        <Link
          to={"provider"}
          className="flex cursor-pointer items-center gap-4 self-end rounded border border-transparent bg-blue-900 p-1 px-12 font-bold hover:border-slate-600 hover:bg-blue-950"
        >
          <TbBusinessplan size={25} />
          Pública tu propio negocio
        </Link>
      )}
    </div>
  );
}
