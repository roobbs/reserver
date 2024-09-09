import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import "../../styles/Form.css";
import { useNavigate } from "react-router-dom";

interface ServiceFormData {
  name: string;
  description: string;
  duration: number | string;
  price: number | string;
}

export default function ServiceForm() {
  const [formData, setFormData] = useState<ServiceFormData>({
    name: "",
    description: "",
    duration: "",
    price: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { business, addBusiness } = useContext(AuthContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "duration" || name === "price" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/provider/${business?._id}/service`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setError(null);
        addBusiness(result.provider);
        navigate("/profile");
      } else {
        setError(result.message || "Error en el servidor");
      }
    } catch (e) {
      console.log(e);
      setError("Ocurrió un error. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="formComponent flex w-fit flex-col gap-4 rounded-md border border-gray-500 p-4"
    >
      <div className="inputContainer">
        <label>Nombre del Servicio</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Corte de cabello"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe aqui tu servicio"
          required
          className="resize-y"
        />
      </div>

      <div className="inputContainer">
        <label>Duración aprox.(minutos)</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          min={10}
          placeholder="Duración en minutos"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Precio (pesos)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min={10}
          placeholder="Precio"
          required
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-600 p-1 text-center text-sm">
          {error} :/
        </div>
      )}

      <button
        type="submit"
        className="m-3 rounded-md bg-blue-900 px-2 py-1 text-white transition-colors duration-300 hover:bg-slate-900"
      >
        Crear Servicio
      </button>
    </form>
  );
}
