import axios from "axios";
import { storage_functions } from "./Storage_functions";

const MY_IP = "http://192.168.0.174";

const retrieveTOken = async () => {
  const response = await storage_functions.get(storage_functions.KEY.register);

  return response;
};

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
  /* const response = await fetch("http://192.168.0.174:5000/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      pswd: userPassword,
    }),
  }); */
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

const savedPhoto = async (
  token: string,
  photoHeigth: number,
  photoWigth: number,
  encodeData: string
) => {
  const response = await fetch(`${MY_IP}:5000/images/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      height: photoHeigth,
      width: photoWigth,
      encodedData: encodeData,
    }),
  });

  //console.log(response._bodyInit._data.__collector);
  console.log(`Api: ${response.status}`);
  console.log(`Api: ${token}`);
  if (response.status == 201) {
    return response.json();
  } else {
    return null;
  }
};

/* const getAllPhotos = async (token: string | unknown) => {
  //const token = await storage_functions.get(storage_functions.KEY.register);
  //const cleanedToken = token!.replace(/['"]+/g, "");
  const response = await axios.get(`${MY_IP}/images/get-all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(`APi: ${response}`);
  if (response.status == 201) {
    return response.data.object;
  } else {
    return null;
  }
}; */

const getAllPhotos = async (token: string | unknown) => {
  const response = await axios.get(MY_IP + ":5000/images/get-all", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.data.object;

  if (response.status == 409) {
    return null;
  }

  return json;
};

export const user_service_functions = {
  registerUser,
  logUser,
  savedPhoto,
  getAllPhotos,
};
