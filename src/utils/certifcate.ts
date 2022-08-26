import axios from "axios";
import {server} from "./apiConfigs";

export async function  findCertificate(id: number) {
    const response = await axios.get(`${server.url}/api/certificates/${id}`);
    return response.data;
}

export async function createCertificate(
    firstName: string,
    lastName: string,
    email: string,
    course: string,
) {
    const data = {firstName, lastName, email, course, isApprove: false, claimId: ""};

    return await axios.post(`${server.url}/api/certificates`, data);
}

export async function updateCertificate(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    course: string,
    isApprove: boolean,
    unsignedCredentials: string
) {
    const data = {firstName, lastName, email, course, isApprove, unsignedCredentials };
    console.log(data);

    return await axios.put(`${server}/api/certificates/${id}`, data);
}
