import { createContext, useState, ReactNode } from "react";

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  googleId: string;
  service_provider: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  providerId: string;
}

export interface Appointment {
  _id: string;
  providerId: string;
  date: Date;
  status: string;
  createdAt: Date;
}

export interface Business {
  _id: string;
  name: string;
  type: string;
  description?: string;
  location?: string;
  contactInfo?: string;
  availability?: string[];
  ratings: [];
  servicesOffered: Service[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthContextType {
  user: User | null;
  addUser: (user: User) => void;
  logOutUser: () => void;
  business: Business | null;
  addBusiness: (business: Business) => void;
  businessesList: Business[] | null;
  addBusinessesList: (array: Business[]) => void;
  appointments: Appointment[] | null;
  addAppointments: (appointment: Appointment[]) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  addUser: () => {},
  logOutUser: () => {},
  business: null,
  addBusiness: () => {},
  businessesList: [],
  addBusinessesList: () => {},
  appointments: [],
  addAppointments: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [business, setBusiness] = useState<Business | null>(null);
  const [businessesList, setBusinessesList] = useState<Business[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addUser = (user: User) => {
    setUser(user);
  };

  const logOutUser = () => {
    setUser(null);
    setBusiness(null);
    localStorage.removeItem("jwtToken");
  };

  const addBusiness = (business: Business) => {
    setBusiness(business);
  };
  const addBusinessesList = (array: Business[]) => {
    setBusinessesList(array);
  };
  const addAppointments = (array: Appointment[]) => {
    setAppointments(array);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        addUser,
        logOutUser,
        business,
        addBusiness,
        businessesList,
        addBusinessesList,
        appointments,
        addAppointments,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
