import ServiceForm from "../components/forms/ServiceForm";

export default function CreateService() {
  return (
    <div className="relative flex flex-1 flex-col place-content-center place-items-center gap-4 bg-gray-100 p-6">
      <div className="text-xl font-bold text-blue-950">
        Agrega un nuevo servicio
      </div>
      <ServiceForm />
    </div>
  );
}
