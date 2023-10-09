import { createContext, useReducer, useContext, FC } from "react";
import {
  AuthAction,
  AuthContextType,
  AuthState,
  authContextType,
} from "./authContextType";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  isAuthenticated: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload);
      return { isAuthenticated: true };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { isAuthenticated: false };
    case "REGISTER":
      localStorage.setItem("token", action.payload);
      return { isAuthenticated: true };
    default:
      return state;
  }
};

export const AuthProvider: FC<authContextType> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
