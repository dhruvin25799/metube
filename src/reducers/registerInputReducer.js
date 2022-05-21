export const registerInputReducer = (state, action) => {
  switch (action.type) {
    case "FNAME": {
      return { ...state, fName: action.payload };
    }
    case "LNAME": {
      return { ...state, lName: action.payload };
    }
    case "EMAIL": {
      return { ...state, email: action.payload };
    }
    case "PASSWORD": {
      return { ...state, password: action.payload };
    }
    case "RESET": {
      return initialRegisterInputState;
    }
    default:
      return state;
  }
};

export const initialRegisterInputState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
};
