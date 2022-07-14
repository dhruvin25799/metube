export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, ...action.payload };
    }
    case "LIST": {
      return { ...state, watchlater: [...action.payload] };
    }
    case "PLAYLIST": {
      return { ...state, playlists: [...action.payload] };
    }
    case "PLAYLIST_REPLACE": {
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id
            ? { ...action.payload }
            : playlist
        ),
      };
    }
    case "LIKE": {
      return { ...state, likes: [...action.payload] };
    }
    case "HISTORY": {
      return { ...state, history: [...action.payload] };
    }
    case "LOGOUT": {
      return initialUserData;
    }
    default:
      return state;
  }
};

export const initialUserData = {};
