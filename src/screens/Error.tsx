import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold m-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-8">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button
        onClick={goHome}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
      >
        Volver a la página principal
      </button>
    </div>
  );
}

export default Error;
