import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://task-nest-server-one.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
