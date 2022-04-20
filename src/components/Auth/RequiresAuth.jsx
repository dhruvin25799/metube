import { useAuth } from "../../context/auth-context";
import { Navigate } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  const { authState } = useAuth();
  return authState.isLoggedIn ? children : <Navigate to="/login" replace />;
};
