import axios from "axios";

const request = axios.create({
  baseURL: "https://6528e0a5931d71583df28702.mockapi.io/",
  timeout: 10000,
});
export default request;
