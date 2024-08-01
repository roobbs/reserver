import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="background flex h-screen flex-col items-center justify-center bg-gray-100 text-white">
      <h1 className="m-4 text-5xl font-bold">404 - Página no encontrada</h1>
      <p className="mb-8 text-lg">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button
        onClick={goHome}
        className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-green-700"
      >
        Volver a la página principal
      </button>
    </div>
  );
}

export default Error;
