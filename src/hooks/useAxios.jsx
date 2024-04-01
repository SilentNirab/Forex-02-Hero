import axios from "axios";

const axiosSecure = axios.create({
  baseURL: " https://package-rust.vercel.app/",
});
const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
