import axios, { CreateAxiosDefaults } from 'axios';

const options: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_HOST_API,
};

const axiosClassic = axios.create(options);

const fetcher = async (args: string) => {
    const [url, payload, method = 'get', headers = {}] = Array.isArray(args) ? args : [args];

    if (method.toLowerCase() === 'post') {
        const res = await axiosClassic.post(url, payload, { headers });
        return res.data;
    }

    if (method.toLowerCase() === 'put') {
        const res = await axiosClassic.put(url, payload, { headers });
        return res.data;
    }

    const res = await axiosClassic.get(url, { headers });
    return res.data;
};

const endpoints = {
    lang: {
        root: 'common/language-list',
    },
    menu: {
        categories: 'menu-info/category-page',
        items: 'menu-info/item-page',
    },
};

export { axiosClassic, fetcher, endpoints };
