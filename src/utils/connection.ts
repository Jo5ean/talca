import axios, { type AxiosRequestConfig } from 'axios';
import { type requestConnection, type responseConnection } from '@/types/connection';
import config from '@/config/config';
const { AUTORIZATION: { USER, PASSWORD } } = config;


const MESSAGE_ERROR = {
    status: 0,
    message: 'No se pudo realizar la petición'
};

export const connection = async ({ method = 'POST', url = '', params = {}, data = {}, headers = {} }: requestConnection): Promise<responseConnection> => {
    const headersDefault = {
        'Authorization': 'Basic ' + btoa(USER + ":" + PASSWORD),
        'Content-Type': 'application/json',
        ...headers
    };

    const config: AxiosRequestConfig = {
        method: method,
        headers: headersDefault,
        url: url,
        params: params,
        data: data,
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error: any) {
        // console.error('Request failed', error);
        if (error.response.data) {
            return error.response.data;
        }
        const message = error.response?.data?.message ?? error.message ?? 'Error desconocido';
        return { ...MESSAGE_ERROR, message };
    }
};
