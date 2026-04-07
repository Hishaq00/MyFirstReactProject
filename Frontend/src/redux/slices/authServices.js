import { API } from "../../apis/authApi";

export const registerUser = async (data) => {
   const res = await API.post("/register", data); 
   return res.data; 
};
export const loginUser = async (data) => {
    const res = await API.post("/login", data); 
    return res.data; 
};

export const getUserProfile = async (token) => {
    const res = await API.get("/profile", {
        headers: {
            Authorization: token
        }
    });
    return res.data;
}