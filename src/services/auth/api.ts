import axios from "axios";

const api = axios.create({
  baseURL: "https://ffgames134.herokuapp.com/",
});

export default api;