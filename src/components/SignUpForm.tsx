import { useState, ChangeEvent, FormEvent } from "react";
import "../styles/Form.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

function SignUpForm() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addUser } = useContext(AuthContext);

  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setError(null);
        localStorage.setItem("token", result.token);
        addUser(result.user);
        navigate("/home");
      } else if (result.error.code === 11000) {
        setError(`Este correo ya existe`);
      } else {
        setError(result.message || "Server error, failed to create user");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="formComponent flex w-fit flex-col gap-4 rounded-md border border-white p-4"
      >
        <div className="inputContainer">
          <label>Nombre</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
        </div>

        <div className="inputContainer">
          <label>Apellido</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Apellido"
            required
          />
        </div>

        <div className="inputContainer">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@gmail.com"
            required
          />
        </div>

        <div className="inputContainer">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Pass123"
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
          className="m-3 rounded-md bg-white px-2 py-1 text-blue-900"
        >
          Registrarse
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
