import axios from "axios";

export const usersAxios = axios.create({
  baseURL: "/api/users",
});

export const signUp = (data, cb) => async (dispatch, getState) => {
  usersAxios
    .post("signup", data)
    .then((resp) => {
      //  smth
      console.log(resp);
      cb(true);
    })
    .catch((e) => {
      console.log("signup thunk issue: ", e);
      cb(false);
    });
};
