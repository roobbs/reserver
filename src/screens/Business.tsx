import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import BusinessCard from "../components/BusinessCard";

export default function Business() {
  const { businessesList } = useContext(AuthContext);

  return (
    <div className="flex flex-1 flex-col gap-8 bg-gray-200 p-6 text-blue-950">
      <div className="text-xl font-bold">Descubre nuevos servicios:</div>
      <div className="flex flex-col gap-4">
        {businessesList &&
          businessesList.map((el) => (
            <BusinessCard business={el} key={el._id} />
          ))}
      </div>
    </div>
  );
}
