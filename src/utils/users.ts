import axios from "axios";
import {server} from "./apiConfigs";

export async function createUser(
    username: string,
    email: string,
) {
    const data = {username, email};
    return await axios.post(`${server.url}/api/users`, data);
}
