import axios from "axios";
export const addToList = async (request) => {
  const response = await axios.post(
    "/api/user/watchlater",
    { video: request.video },
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 201) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};

export const addToLiked = async (request) => {
  const response = await axios.post(
    "/api/user/likes",
    { video: request.video },
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 201) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};

export const addToHistory = async (request) => {
  const response = await axios.post(
    "/api/user/history",
    { video: request.video },
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 201) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};

export const createPlaylist = async (request) => {
  const response = await axios.post(
    "/api/user/playlists",
    {
      playlist: { title: request.title, description: "User defined playlist" },
    },
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 201) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};

export const addVideoToPlaylist = async (request) => {
  const response = await axios.post(
    "/api/user/playlists/" + request.playlistId,
    { video: request.data },
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 201) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};
