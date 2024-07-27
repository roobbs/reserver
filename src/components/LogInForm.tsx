import { useState, ChangeEvent, FormEvent } from "react";
import "../styles/Form.css";

interface FormData {
  email: string;
  password: string;
}

function LogInForm() {
  const [formData, setFormData] = useState<FormData>({
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
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

      <button
        type="submit"
        className="m-3 rounded-md bg-white px-2 py-1 text-blue-900"
      >
        Ingresar
      </button>
    </form>
  );
}

export default LogInForm;
