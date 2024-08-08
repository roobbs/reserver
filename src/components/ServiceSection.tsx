export default function ServiceSection() {
  return (
    <div className="flex flex-col">
      <div className="self-center rounded p-2 text-xl font-bold text-slate-800 shadow-sm shadow-slate-600">
        Actualmente no tienes ningun servicio, agrega uno!
      </div>
      <div>service section</div>

      <div className="flex cursor-pointer items-center gap-2 self-center rounded-md border border-transparent bg-emerald-600 px-4 py-1 text-lg text-white transition-all hover:border-green-500 hover:bg-emerald-800">
        Agregar servicio
      </div>
    </div>
  );
}
