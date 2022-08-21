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
) {
    const data = {firstName, lastName, course, isApprove: false, claimId: ""};

    return await axios.post(`${server.url}/api/certificates`, data);
}

export async function updateCertificate(
    id: number,
    firstName: string,
    lastName: string,
    course: string,
    isApprove: string,
    claimId: string
) {
    const data = {firstName, lastName, course, isApprove, claimId };
    console.log(data);

    return await axios.put(`${server}/api/certificates/${id}`, data);
}