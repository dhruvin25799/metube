export const loginAPICall = async (inputState) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: inputState.email,
        password: inputState.password,
      }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.errors[0]);
    }
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const registerAPICall = async (inputState) => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: inputState.email,
        password: inputState.password,
        firstName: inputState.fName,
        lastName: inputState.lName,
      }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.errors[0]);
    }
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
