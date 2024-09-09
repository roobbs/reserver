import { Service } from "./auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";

interface ServiceInfoProps {
  service: Service;
}

export default function ServiceInfoCard({ service }: ServiceInfoProps) {
  const navigate = useNavigate();

  function goToService() {
    if (service._id) {
      navigate(`service/${service._id}`, { state: { service } });
    }
  }

  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-xl border border-slate-400 p-4 shadow-md transition-all duration-500 hover:bg-slate-800 hover:text-white">
      <div className="flex items-center gap-2 self-center text-lg font-bold">
        <CiShoppingTag />
        {service.name}
      </div>
      <div className="italic">{service.description} </div>
      <div className="flex items-center gap-2">
        <IoMdTime size={22} />
        {service.duration}min.
      </div>
      <div className="self-center text-2xl font-bold">${service.price} </div>
      <div
        onClick={() => goToService()}
        className="m-1 flex items-center justify-center gap-2 rounded border border-white bg-blue-900 p-1 px-2 text-white shadow-sm transition-all hover:border-transparent hover:bg-emerald-500"
      >
        <MdDriveFileRenameOutline />
        RESERVAR
      </div>
    </div>
  );
}
