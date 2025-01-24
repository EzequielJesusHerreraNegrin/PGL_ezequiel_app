const registerUser = async (
  userEmail: String,
  userName: String,
  userPassword: String
) => {
  const response = await fetch("http://192.168.0.153:5000/auth/register", {
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

  /* if (response.status == 201) {
    console.log(response.json());
    return response.status.toString();
  } */

  return response.json();
};

const logUser = async (
  userEmail: String,
  userPassword: String
): Promise<String | null> => {
  const response = await fetch("http://192.168.0.153:5000/auth/login", {
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

  //console.log("service.Login: " + response.status)
  console.log("service.login: " + (await response.json()));
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
