import axios from "axios";
import {server} from "./apiConfigs";

export async function findCertificate(query: any) {
    const response = await axios.get(`${server.url}/api/certificates?q=${query}`);
    return response.data;
}

export async function createCertificate(
    firstName: string,
    lastName: string,
    course: string,
    // isApprove: boolean
) {
    const data = {firstName, lastName, course, isApprove: false};

    return await axios.post(`${server.url}/api/certificates`, data);
}
