import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import BusinessCard from "../components/BusinessCard";

export default function Business() {
  const { businessesList } = useContext(AuthContext);

  return (
    <div className="flex flex-1 flex-col gap-4 bg-slate-300 p-6">
      <div className="text-xl">Descubre nuevos servicios:</div>
      <div className="flex flex-col gap-4">
        {businessesList &&
          businessesList.map((el) => <BusinessCard business={el} />)}
      </div>
    </div>
  );
}
