import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5030/'
})

const useAxios = () => {
    return axiosInstance;
}
export default useAxios;