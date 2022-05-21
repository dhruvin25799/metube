export const addToList = async (request) => {
  const response = await fetch("/api/user/watchlater", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: request.token,
    },
    body: JSON.stringify({ video: request.video }),
  });
  const data = await response.json();
  if (response.status !== 201) {
    throw new Error(data.errors[0]);
  }
  return data;
};

export const addToLiked = async (request) => {
  const response = await fetch("/api/user/likes", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: request.token,
    },
    body: JSON.stringify({ video: request.video }),
  });
  const data = await response.json();
  if (response.status !== 201) {
    throw new Error(data.errors[0]);
  }
  return data;
};

export const addToHistory = async (request) => {
  const response = await fetch("/api/user/history", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: request.token,
    },
    body: JSON.stringify({ video: request.video }),
  });
  const data = await response.json();
  if (response.status !== 201) {
    throw new Error(data.errors[0]);
  }
  return data;
};