import axios from "axios";
import {server} from "./apiConfigs";

export async function getApplications(id: number) {
    if (!id) {
        return [{
            "_id": "123",
            "error": "No Applications",
        }];
    }
    const response = await axios.get(`${server.url}/api/certificates/dashboard/${id}`);
    return response.data;
}

export async function getApprovedCertificate() {
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
