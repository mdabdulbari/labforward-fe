import axios from "axios";

import { API_BASE_URL } from "../apiConfig";

export const getCall = (path) => {
    let URL = API_BASE_URL + path;
    return axios.get(URL);
};

export const postCall = (path, data) => {
    let URL = API_BASE_URL + path;
    return axios.post(URL, data);
};

export const putCall = (path, data) => {
    let URL = API_BASE_URL + path;
    return axios.put(URL, data);
};

export const deleteCall = (path) => {
    let URL = API_BASE_URL + path;
    return axios.delete(URL);
};
