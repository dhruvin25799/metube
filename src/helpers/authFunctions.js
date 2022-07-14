import axios from "axios";
export const loginAPICall = async (inputState) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: inputState.email,
      password: inputState.password,
    });
    if (response.status !== 200) {
      throw new Error(response.data.errors[0]);
    }
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const registerAPICall = async (inputState) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      email: inputState.email,
      password: inputState.password,
      firstName: inputState.fName,
      lastName: inputState.lName,
    });
    if (response.status !== 201) {
      throw new Error(response.data.errors[0]);
    }
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
