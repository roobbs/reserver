import { IoMdTime } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";

interface ServiceCardProps {
  name: string;
  price: number;
  duration: number;
}

export default function ServiceCard({
  name,
  price,
  duration,
}: ServiceCardProps) {
  return (
    <div className="flex cursor-pointer flex-col items-center rounded-2xl border border-slate-700 bg-indigo-950 p-4 font-bold text-white shadow-md shadow-slate-400 hover:bg-indigo-900">
      <div className="mb-4 border-b border-white pb-2 text-xl">{name}</div>
      <div className="flex items-center gap-2">
        <IoPricetagOutline size={25} />${price}
      </div>
      <div className="flex items-center gap-2">
        <IoMdTime size={25} />
        Duration: {duration} min.
      </div>
    </div>
  );
}
