import axiosConfig from "../axios/axiosConfig";

const login = async ({ email, password }) => {
  try {
    let result = await axiosConfig.post("login", {
      email: email,
      password: password,
    });

    localStorage.token = result.token;
  } catch (err) {
    // throw new Error(err);
    console.log(err)
  }
};

const userService = {
  login: login,
};

export default userService;
