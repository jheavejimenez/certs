import axios from "axios";
import {server} from "./apiConfigs";

export async function  getApplications(id: number) {
    const response = await axios.get(`${server.url}/api/certificates/${id}`);
    return response.data;
}

export async function  getApprovedCertificate() {
    const response = await axios.get(`${server.url}/api/certificates`);
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
