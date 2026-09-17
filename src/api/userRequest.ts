import api from "./axios";

type User = {
    username : string;
    password : string;
}

const userRequestToExterenalAPI = async (data: User) => {
    const response = await api.post("/auth/login", data);

    return response;
};


export default userRequestToExterenalAPI;