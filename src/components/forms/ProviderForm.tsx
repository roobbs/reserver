import { useState, ChangeEvent, FormEvent } from "react";
import "../../styles/Form.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const daysOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

interface FormData {
  name: string;
  type: string;
  description: string;
  location: string;
  contactInfo: string;
  availability: string[];
}

export default function ProviderForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    type: "",
    description: "",
    location: "",
    contactInfo: "",
    availability: [],
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addUser, user, addBusiness } = useContext(AuthContext);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "availability") {
      setFormData({
        ...formData,
        availability: value.split(",").map((item) => item.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevFormData) => {
      const newAvailability = checked
        ? [...prevFormData.availability, value]
        : prevFormData.availability.filter((day) => day !== value);
      return { ...prevFormData, availability: newAvailability };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        `http://localhost:3000/api/user/${user?._id}/serviceprovider`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      console.log(data);

      if (data.success) {
        console.log("User updated successfully", data);
        addUser(data.user);
        addBusiness(data.business);

        navigate("/profile");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error en el servidor");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="formComponent flex w-fit flex-col gap-4 rounded-md border border-gray-500 p-4"
    >
      <div className="inputContainer">
        <label>Nombre del Negocio</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre del Negocio"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Tipo de Negocio</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Ej. Barberia"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Descripción</label>
        <textarea
          className="resize-y"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción de tu negocio"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Ubicación</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Ciudad"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Contacto</label>
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          placeholder="Telefono de Contacto"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Disponibilidad</label>
        <div className="flex max-w-80 flex-wrap gap-3">
          {daysOfWeek.map((day) => (
            <div key={day}>
              <label>
                <input
                  type="checkbox"
                  value={day}
                  checked={formData.availability.includes(day)}
                  onChange={handleCheckboxChange}
                />
                {day}
              </label>
            </div>
          ))}
        </div>
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
        Crear Negocio
      </button>
    </form>
  );
}
