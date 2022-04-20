export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, ...action.payload };
    }
    case "LIST": {
      return { ...state, watchlater: [...action.payload] };
    }
    case "LOGOUT":{
        return initialUserData
    }
    default:
      return state;
  }
};

export const initialUserData = {};
