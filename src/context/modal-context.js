import { createContext, useContext, useReducer } from "react";
import { modalReducer, initialModalState } from "../reducers/modalReducer";
const modalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalState, modalStateDispatch] = useReducer(
    modalReducer,
    initialModalState
  );
  return (
    <modalContext.Provider value={{ modalState, modalStateDispatch }}>
      {children}
    </modalContext.Provider>
  );
};

export const useModal = () => useContext(modalContext);
