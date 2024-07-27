import { useState, ChangeEvent, FormEvent } from "react";
import "../styles/Form.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  age: string;
}

function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
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
        <label>Nombre</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Apellido</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
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

      <div className="inputContainer">
        <label>Teléfono</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="XXX XXX XXXX"
          required
        />
      </div>

      <div className="inputContainer">
        <label>Edad</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Edad"
          required
        />
      </div>

      <button
        type="submit"
        className="m-3 rounded-md bg-white px-2 py-1 text-blue-900"
      >
        Registrarse
      </button>
    </form>
  );
}

export default SignUpForm;
