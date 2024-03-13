import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const newsRestClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_NEWSURL,
    headers: {
        'Content-Type': `application/json; charset=UTF-8`
    },
    timeout: 3000
});

newsRestClient.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    return req;
});

newsRestClient.interceptors.response.use(
    (res: AxiosResponse) => {
        if (
            res.data.status &&
            res.data.status.toLocaleLowerCase() == 'error' &&
            res.data.message &&
            res.data.message.toLocaleLowerCase() == 'authentication failed'
        ) 
        return res.data;
    },
    (err: any) => {
        const res = err.response;
        const url = err.config ? err.config.url : '';
        const msg = [`Error in calling the API - ${url}. ${err.message}.`];
        if (res && res.data) {
            msg.push(` ${res.data}`);
        }
        console.log(msg.join(''));

        throw err;
    }
);

export default newsRestClient;
