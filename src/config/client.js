import axios from 'axios';

class Client {
    constructor(baseURL) {
        this.axiosInstance = axios.create({
            baseURL,
        });
    }

    get(url, config) {
        return this.axiosInstance.get(url, config);
    }

    post(url, data, config) {
        return this.axiosInstance.post(url, data, config);
    }

    put(url, data, config) {
        return this.axiosInstance.put(url, data, config);
    }

    patch(url, data, config) {
        return this.axiosInstance.patch(url, data, config);
    }

    delete(url, config) {
        return this.axiosInstance.delete(url, config);
    }
}


export const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000/';
export const client = new Client(backendUrl);