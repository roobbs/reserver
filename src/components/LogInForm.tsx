import { useState, ChangeEvent, FormEvent } from "react";
import "../styles/Form.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

interface FormData {
  email: string;
  password: string;
}

export default function LogInForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addUser, addBusiness, addBusinessesList } = useContext(AuthContext);

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
      const response = await fetch("http://localhost:3000/api/user/login", {
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
        if (result.business !== null) {
          addBusiness(result.business);
        }
        addBusinessesList(result.businessesList);
        navigate("/home");
      } else if (!result.success) {
        setError(result.message);
      } else {
        setError(result.message || "Server error, failed to create user");
      }
    } catch (e) {
      console.log(e);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="formComponent flex w-fit flex-col gap-4 rounded-md border border-white p-4"
      >
        <div className="inputContainer">
          <label>Correo</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
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
            placeholder="Password"
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
          Ingresar
        </button>
      </form>
    </>
  );
}
