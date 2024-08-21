import ServiceForm from "../components/forms/ServiceForm";

export default function CreateService() {
  return (
    <div className="background relative flex flex-1 flex-col place-content-center place-items-center gap-4 p-6">
      <div className="text-3xl font-semibold text-cyan-400">
        Agrega un nuevo servicio
      </div>
      <ServiceForm />
    </div>
  );
}
