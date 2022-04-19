import { createContext, useContext, useReducer } from "react";

const modalContext = createContext();

const modalReducer = (state, action) => {
  switch(action.type){
    case "CLOSE" : {
      return {...state, isOpen: false}
    }
    case "OPEN": {
      return{...state, isOpen: true, data: action.payload}
    }
    default:
      return state;
  }
}

const initialModalState = {
  isOpen: false,
  data: {},
}

export const ModalProvider = ({ children }) => {
  const [modalState, modalStateDispatch] = useReducer(modalReducer, initialModalState);
  return (
    <modalContext.Provider value={{ modalState, modalStateDispatch }}>
      {children}
    </modalContext.Provider>
  );
};

export const useModal = () => useContext(modalContext);
