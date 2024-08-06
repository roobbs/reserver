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

interface Business {
  _id: string;
  name: string;
  type: string;
  description?: string;
  location?: string;
  contactInfo?: string;
  availability?: string[];
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
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [business, setBusiness] = useState<Business | null>(null);

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
  return (
    <AuthContext.Provider
      value={{ user, addUser, logOutUser, business, addBusiness }}
    >
      {children}
    </AuthContext.Provider>
  );
}
