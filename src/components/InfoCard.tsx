import { CiCircleCheck } from "react-icons/ci";

interface InfoCardProps {
  title: string;
  info: string[];
}

export default function InfoCard({ title, info }: InfoCardProps) {
  return (
    <div className="w-fit max-w-64 rounded-md bg-white p-4 text-black shadow-sm shadow-white">
      <div className="mb-4 flex items-center gap-2 border-b border-b-sky-900 pb-4">
        <CiCircleCheck size={30} />
        <div className="font-semibold">{title}</div>
      </div>
      <div className="flex flex-col gap-4">
        {info.map((el, index) => (
          <div key={index} className="text-gray-600">
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
