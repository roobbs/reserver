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
    <div className="flex flex-col items-center rounded border border-slate-700 bg-indigo-700 p-4 font-bold text-white shadow-md shadow-slate-500">
      <div className="mb-4 border-b border-white pb-2 text-xl">{name}</div>
      <div>${price}</div>
      <div>Duration: {duration} min.</div>
    </div>
  );
}
