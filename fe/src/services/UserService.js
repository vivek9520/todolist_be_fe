import axios from "axios";
export async function login(email, password) {
  try {
    let response = await axios.post(" http://localhost:3001/api/v1/login", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function register(email, password, name) {
  try {
    let response = await axios.post(" http://localhost:3001/api/v1/signup", {
      email,
      password,
      name,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
