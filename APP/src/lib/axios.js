import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

// Add an interceptor to include the CSRF token in requests
axiosInstance.interceptors.request.use((config) => {
  const csrfToken = getCsrfTokenFromCookie();
  if (csrfToken) {
    config.headers['X-XSRF-TOKEN'] = csrfToken;
  }
  return config;
});

// Get the CSRF token from the cookie
const getCsrfTokenFromCookie = () => {
    const csrfCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('XSRF-TOKEN'));
    if (!csrfCookie) {
        return null;
    }
    return csrfCookie.split('=')[1];
};

export default axiosInstance;
