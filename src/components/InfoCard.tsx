import { CiCircleCheck } from "react-icons/ci";

interface InfoCardProps {
  title: string;
  info: string[];
}

export default function InfoCard({ title, info }: InfoCardProps) {
  return (
    <div className="w-fit max-w-64 rounded-2xl border bg-blue-900 p-4 shadow-md">
      <div className="mb-4 flex items-center gap-2 border-b border-b-gray-400 pb-4 text-white">
        <CiCircleCheck size={30} />
        <div className="text-lg font-bold">{title}</div>
      </div>
      <div className="flex flex-col gap-4">
        {info.map((el, index) => (
          <div key={index} className="text-gray-100">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
