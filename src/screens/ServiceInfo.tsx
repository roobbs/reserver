import { useLocation } from "react-router-dom";
import { Service } from "../components/AuthContext";

export default function ServiceInfo() {
  const location = useLocation();
  const service = location.state.service as Service;

  return (
    <div>
      <h1>{service.name}</h1>
      <p>{service.description}</p>
      <p>Duration: {service.duration} minutes</p>
      <p>Price: ${service.price}</p>
    </div>
  );
}
