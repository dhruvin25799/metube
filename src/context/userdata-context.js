import { createContext, useContext, useReducer } from "react";
import { userDataReducer, initialUserData } from "../reducers/userDataReducer";
const userDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [userData, userDataDispatch] = useReducer(
    userDataReducer,
    initialUserData
  );
  return (
    <userDataContext.Provider value={{ userData, userDataDispatch }}>
      {children}
    </userDataContext.Provider>
  );
};

export const useUserData = () => useContext(userDataContext);
