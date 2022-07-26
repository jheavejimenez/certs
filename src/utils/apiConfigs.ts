import axios, {AxiosInstance} from 'axios';
const issuerBaseUrl: string = `https://affinity-issuer.prod.affinity-project.org/api/v1/vc/build-unsigned`


export const issuerApi: AxiosInstance = axios.create({
    baseURL: issuerBaseUrl,
    headers: {
        'Api-Key': "",
        'Content-Type': 'application/json',
    },
});

