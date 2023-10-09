import { ReactNode } from "react";

export type authContextType = {
  children: ReactNode;
};

export interface AuthState {
  isAuthenticated: boolean;
}

export type AuthAction =
  | { type: "LOGIN"; payload: string }
  | { type: "REGISTER"; payload: string }
  | { type: "LOGOUT" };

export interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}
