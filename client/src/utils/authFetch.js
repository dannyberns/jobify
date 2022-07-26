import axios from "axios";

const authFetch = axios.create({
    baseURL: "/api/v1"
});

// request
authFetch.interceptors.request.use(
    config => {
        config.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
            "token"
        )}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// response
authFetch.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default authFetch;
