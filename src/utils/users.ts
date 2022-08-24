import axios from "axios";
import {server} from "./apiConfigs";

export async function createUser(
    username: string,
    email: string,
) {
    const data = {username, email};
    const response = await axios.post(`${server.url}/api/users`, data);
    return response.data = {
        id: response.data._id,
        username: response.data.username,
    };
}
