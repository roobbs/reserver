import { useContext } from "react";
import { AuthContext } from "../components/auth/AuthContext";
import BusinessCard from "../components/BusinessCard";

export default function Business() {
  const { businessesList } = useContext(AuthContext);

  return (
    <main className="flex flex-1 flex-col justify-between gap-10 bg-gray-100 p-4 py-8">
      <section className="flex flex-col gap-12 rounded-lg bg-white p-8 shadow-lg shadow-slate-500">
        <div className="text-xl font-bold text-blue-950">
          Descubre nuevos servicios:
        </div>
        <div className="flex flex-col gap-4">
          {businessesList &&
            businessesList.map((el) => (
              <BusinessCard business={el} key={el._id} />
            ))}
        </div>
      </section>
    </main>
  );
}
