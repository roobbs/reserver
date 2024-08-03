import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

interface HeaderProps {
  name: string;
}

export default function HomeHeader({ name }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-blue-950 px-12 py-2">
      <CiCalendar
        size={35}
        onClick={() => {}}
        className="hover:text-emerald-400"
      />
      <div className="flex items-center gap-2 text-lg font-bold">
        {name} <CiUser size={30} />
      </div>
    </header>
  );
}
