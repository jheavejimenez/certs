import axios from "axios";
import {server} from "./apiConfigs";

export async function  getSumittedApplications() {
    const response = await axios.get(`${server.url}/api/approver`);
    return response.data;
}

export async function approveApplication(
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

    return await axios.put(`${server.url}/api/approver/${id}`, data);
}
