import ProviderForm from "../components/forms/ProviderForm";

export default function CreateBusiness() {
  return (
    <div className="relative flex flex-1 flex-col place-content-center place-items-center gap-4 bg-gray-100 p-6">
      <div className="text-xl font-bold text-blue-950">
        Ingresa la información de tu negocio
      </div>
      <ProviderForm />
    </div>
  );
}
