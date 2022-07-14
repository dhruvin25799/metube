import axios from "axios";
export const removeFromList = async (request) => {
  const response = await axios.delete(
    "/api/user/watchlater/" + request.video._id,
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};

export const removeFromLiked = async (request) => {
  const response = await axios.delete("/api/user/likes/" + request.video._id, {
    headers: {
      authorization: request.token,
    },
  });
  if (response.status !== 200) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};

export const removeAllHistory = async (request) => {
  const response = await axios.delete("/api/user/history/all", {
    headers: {
      authorization: request.token,
    },
  });
  if (response.status !== 200) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};

export const removeOneVideo = async (request) => {
  const response = await axios.delete(
    "/api/user/history/" + request.video._id,
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
};

export const deletePlaylist = async(request) => {
  const response = await axios.delete(
    "/api/user/playlists/" + request.playlistId,
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
}

export const deleteVideoFromPlaylist = async(request) => {
  const response = await axios.delete(
    "/api/user/playlists/" + request.playlistId + "/" + request.videoId,
    {
      headers: {
        authorization: request.token,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error(response.data.errors[0]);
  }
  return response.data;
}
