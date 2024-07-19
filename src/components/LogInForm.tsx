import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  age: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
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
      className="w-full bg-purple-600 rounded-md flex flex-col text-white p-4"
    >
      <div className="mb-4 text-center text-lg font-bold">Log In Form</div>

      <div className="grid grid-cols-[1fr,3fr] gap-4 mb-4 items-center">
        <label className="mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border-2 border-transparent rounded-md text-purple-700 bg-white placeholder-gray-500 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-700"
          placeholder="Name"
          required
        />
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

      <div className="grid grid-cols-[1fr,3fr] gap-4 mb-4 items-center">
        <label className="mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="p-2 border-2 border-transparent rounded-md text-purple-700 bg-white placeholder-gray-500 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-700"
          placeholder="Phone"
          required
        />
      </div>

      <div className="grid grid-cols-[1fr,3fr] gap-4 mb-4 items-center">
        <label className="mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="p-2 border-2 border-transparent rounded-md text-purple-700 bg-white placeholder-gray-500 focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-700"
          placeholder="Age"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-white text-purple-600 p-2 rounded-md font-bold self-center px-8"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
