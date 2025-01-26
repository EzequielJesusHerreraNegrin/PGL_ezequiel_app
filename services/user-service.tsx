const registerUser = async (
  userEmail: String,
  userName: String,
  userPassword: String
) => {
  const response = await fetch("http://192.168.0.174:5000/auth/register", {
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
  const response = await fetch("http://192.168.0.174:5000/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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

export const user_service_functions = {
  registerUser,
  logUser,
};
