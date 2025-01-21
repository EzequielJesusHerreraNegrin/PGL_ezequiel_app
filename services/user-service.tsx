const registerUser = async (
  userEmail: String,
  userName: String,
  userPassword: String
): Promise<String | null> => {
  try {
    const response = await fetch("192.168.0.135:5000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        fullname: userName,
        email: userEmail,
        pswd: userPassword,
      }),
    });

    if (response.status == 201) {
      return response.status.toString();
    }
  } catch (error) {
    console.error(error);
  }

  return null;
};

const logUser = async (
  userEmail: String,
  userPassword: String
): Promise<String | null> => {
  try {
    const response = await fetch("192.168.0.135:5000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        pswd: userPassword,
      }),
    });

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
