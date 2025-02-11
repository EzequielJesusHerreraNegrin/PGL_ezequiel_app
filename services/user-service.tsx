import axios from "axios";
import { storage_functions } from "./Storage_functions";

const retrieveTOken = async () => {
  const response = await storage_functions.get(storage_functions.KEY.register);

  return response;
};

const registerUser = async (
  userEmail: String,
  userName: String,
  userPassword: String
) => {
  const response = await fetch("http://192.168.0.154:5000/auth/register", {
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
  const response = await axios.post("http://172.16.101.247:5000/auth/login", {
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
  const response = await fetch(`http://172.16.101.247:5000/images/save`, {
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

const getAllPhotos = () => {};
const deletePhotoById = async (
  photoHeigth: String,
  photoWigth: String,
  encodeData: String
) => {
  const response = await fetch("http://172.16.101.247:5000/images/?id=", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${storage_functions.get(
        storage_functions.KEY.register
      )}`,
    },
    body: JSON.stringify({
      heigth: photoHeigth,
      wigth: photoWigth,
      encodeData: encodeData,
    }),
  });

  if (response.status == 201) {
    return response.json();
  } else {
    return null;
  }
};

let responseData: {
  message: string;
  object: {
    email: string;
    userId: number;
    token: string;
  };
  statusCode: number;
};

export const user_service_functions = {
  registerUser,
  logUser,
  savedPhoto,
};
