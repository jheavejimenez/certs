import axios, {AxiosInstance} from 'axios';
export const issuerBaseUrl: string = `https://affinity-issuer.prod.affinity-project.org/api/v1/vc/build-unsigned`
const accessApiKey: string = `${process.env.API_KEY_HASH}`

export const issuerApi: AxiosInstance = axios.create({
    baseURL: issuerBaseUrl,
    headers: {
        'Api-Key': accessApiKey,
        'Content-Type': 'application/json',
    },
});

export const server = {
    url: "http://localhost:4000",
    localhost: "http://localhost:3000/certs"
}
