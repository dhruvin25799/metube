export const modalReducer = (state, action) => {
  switch (action.type) {
    case "CLOSE": {
      return { ...state, isOpen: false };
    }
    case "OPEN": {
      return { ...state, isOpen: true, data: action.payload };
    }
    default:
      return state;
  }
};

export const initialModalState = {
  isOpen: false,
  data: {},
};
