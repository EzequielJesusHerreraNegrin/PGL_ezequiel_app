import axios from "axios";

const MY_IP = "http://192.168.0.174";

const savedPhoto = async (
  token: string,
  photoHeigth: number,
  photoWigth: number,
  encodeData: string
) => {
  try {
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

    return response.json();
  } catch (error) {
    console.error("Error: no se pudo guardar la imagen. ", error);
    return null;
  }
};

const getAllPhotos = async (token: string | unknown) => {
  try {
    const response = await axios.get(MY_IP + ":5000/images/get-all", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 401) {
      throw new Error("ApiError: El usuario no esta autenticado");
    }

    const json = await response.data.object;

    return json;
  } catch (error) {
    console.error("ApiError: ", error);
    return null;
  }
};

export const camera_service = {
  savedPhoto,
  getAllPhotos,
};
