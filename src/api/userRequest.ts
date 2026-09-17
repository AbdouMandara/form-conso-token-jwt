import api from "./axios";

type User = {
    email : string;
    password : string;
}

const userRequestToExterenalAPI = async (data : User )=>{
    const response = await api.post("/login", data);
    return response.data;
}

export default userRequestToExterenalAPI;