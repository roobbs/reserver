import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  email: string;
  password: string;
}

const LogInForm: React.FC = () => {
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
      className="w-full bg-purple-600 rounded-md flex flex-col text-white p-4"
    >
      <div className="mb-4 text-center text-lg font-bold">
        Ingresa con tu cuenta
      </div>

      <div className="grid grid-cols-[1fr,3fr] gap-4 mb-4 items-center">
        <label className="mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border-2 border-transparent rounded-md text-purple-700 bg-white placeholder-gray-500 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-700"
          placeholder="Email"
          required
        />
      </div>

      <div className="grid grid-cols-[1fr,3fr] gap-4 mb-4 items-center">
        <label className="mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 border-2 border-transparent rounded-md text-purple-700 bg-white placeholder-gray-500 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-700"
          placeholder="Password"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-white text-purple-600 p-2 rounded-md font-bold self-center px-8"
      >
        Ingresar
      </button>
    </form>
  );
};

export default LogInForm;
