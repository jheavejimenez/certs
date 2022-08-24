import axios from "axios";
import {server} from "./apiConfigs";

export async function createUser(
    username: string,
) {
    const data = {username};
    return await axios.post(`${server.url}/api/users`, data);
}
