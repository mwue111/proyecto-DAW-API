import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

const csrfToken = document.cookie.match(/XSRF-TOKEN=([\w-]+)/)?.[1];

axios.defaults.headers.common['X-XSRF-TOKEN'] = csrfToken;

export default axios
