import axios from "axios";

const MY_IP = "http://192.168.0.174";

const registerUser = async (
  userEmail: String,
  userName: String,
  userPassword: String
) => {
  const response = await fetch(`${MY_IP}:5000/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullname: userName,
      email: userEmail,
      pswd: userPassword,
    }),
  });

  if (response.status == 201) {
    return response.json();
  } else {
    return null;
  }
};

const logUser = async (
  userEmail: String,
  userPassword: String
): Promise<String | null> => {
  const response = await axios.post(`${MY_IP}:5000/auth/login`, {
    email: userEmail,
    pswd: userPassword,
  });

  if (response.status == 201) {
    return response.data.object.token;
  } else {
    return null;
  }
};

export const user_service = {
  registerUser,
  logUser,
};
