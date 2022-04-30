import Axios from '../../axios';
import { errorHandler } from './errorHandler';

export const Apis = {
    register: 'api/adduser',
};

export const headers = {
    'content-type': 'application/json',
};

export const get = async (endPoint) => {
    try {
        const result = await Axios.get(endPoint);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const post = async (endPoint, data) => {
    try {
        const result = await Axios.post(endPoint, data);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const put = async (endPoint, data, token) => {
    try {
        const result = await Axios.put(endPoint, data, { headers: { Authorization: `Bearer ${token}` } });
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};