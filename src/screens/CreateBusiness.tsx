import ProviderForm from "../components/forms/ProviderForm";

export default function CreateBusiness() {
  return (
    <div className="background relative flex flex-1 flex-col place-content-center place-items-center gap-4 p-6">
      <div className="text-3xl font-semibold text-cyan-400">
        Ingresa la información de tu negocio
      </div>
      <ProviderForm />
    </div>
  );
}
