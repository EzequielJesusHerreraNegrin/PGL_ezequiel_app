const registerUser = async (
  userEmail: String,
  userName: String,
  userPassword: String
): Promise<String | null> => {
  try {
    const response = await fetch("http://192.168.0.153:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: userName,
        email: userEmail,
        pswd: userPassword,
      }),
    });

    console.log(response.status);
    if (response.status == 201) {
      return response.status.toString();
    }
  } catch (error) {
    console.error("Petó la apiS", error);
  }

  return null;
};

const logUser = async (
  userEmail: String,
  userPassword: String
): Promise<String | null> => {
  try {
    const response = await fetch("http://192.168.0.153:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        pswd: userPassword,
      }),
    });

    console.log("token: " + response.json.toString());
    return response.json.toString();
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const user_service_functions = {
  registerUser,
  logUser,
};
