import api from "./axios";

type User = {
    email : string;
    password : string;
}

const userRequestToExterenalAPI = async (data : User )=>{
    const response = await api.post("/auth/login", data);
    console.log(response.data);
}

export default userRequestToExterenalAPI;