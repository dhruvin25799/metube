export const removeFromList = async (request) => {
  const response = await fetch("/api/user/watchlater/" + request.video._id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: request.token,
    },
  });
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.errors[0]);
  }
  return data;
};

export const removeFromLiked = async (request) => {
  const response = await fetch("/api/user/likes/" + request.video._id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: request.token,
    },
  });
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.errors[0]);
  }
  return data;
};

export const removeAllHistory = async (request) => {
  const response = await fetch("/api/user/history/all", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: request.token,
    },
  });
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.errors[0]);
  }
  return data;
};
