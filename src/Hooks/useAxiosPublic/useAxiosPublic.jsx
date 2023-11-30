import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://real-estate-project-server.vercel.app",
})

const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;