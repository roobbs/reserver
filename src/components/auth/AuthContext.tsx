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
  providerId: Business;
  serviceId: Service;
  date: Date;
  time: string;
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

export interface Conversation {
  _id: string;
  user: string;
  business: string;
  lastMessage: string;
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
  addSingleAppointment: (appointment: Appointment) => void;
  updateAppointment: (id: string) => void;
  conversations: Conversation[];
  addConversations: (conversations: Conversation[]) => void;
  addSingleConversation: (conversation: Conversation) => void;
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
  addSingleAppointment: () => {},
  updateAppointment: () => {},
  conversations: [],
  addConversations: () => {},
  addSingleConversation: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [business, setBusiness] = useState<Business | null>(null);
  const [businessesList, setBusinessesList] = useState<Business[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);

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
  const addSingleAppointment = (appointment: Appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };
  const updateAppointment = (id: string) => {
    const newAppoinmentsArray: Appointment[] = appointments.map(
      (appointment) => {
        if (appointment._id === id) {
          appointment.status = "canceled";
        }
        return appointment;
      },
    );
    setAppointments(newAppoinmentsArray);
  };
  const addConversations = (array: Conversation[]) => {
    setConversations(array);
  };
  const addSingleConversation = (conv: Conversation) => {
    setConversations((prevConversations) => [...prevConversations, conv]);
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
        addSingleAppointment,
        updateAppointment,
        conversations,
        addConversations,
        addSingleConversation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
