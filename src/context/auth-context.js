import { createContext, useContext, useReducer } from "react";
import { authReducer, initialAuthState } from "../reducers/authReducer";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authStateDispatch] = useReducer(
    authReducer,
    initialAuthState
  );
  return (
    <authContext.Provider value={{ authState, authStateDispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
