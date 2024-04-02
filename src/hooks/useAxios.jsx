import axios from "axios";

const axiosSecure = axios.create({
  baseURL: " https://package-rust.vercel.app/",
  // baseURL: " http://localhost:5000/",

  
});
const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
