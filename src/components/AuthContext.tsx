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

interface AuthContextType {
  user: User | null;
  addUser: (user: User) => void;
  logOutUser: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  addUser: () => {},
  logOutUser: () => {},
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const addUser = (user: User) => {
    setUser(user);
  };

  const logOutUser = () => {
    setUser(null);
    localStorage.removeItem("jwtToken");
  };

  return (
    <AuthContext.Provider value={{ user, addUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
