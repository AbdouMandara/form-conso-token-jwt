import api from "./axios";
import type { User } from "../types/userConnecte"
const userConnecte = async (): Promise<User> => {
    const response = await api.get("/auth/me");
    return response.data;
}

export default userConnecte;