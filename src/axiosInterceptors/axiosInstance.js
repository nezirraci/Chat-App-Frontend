import axios from 'axios';
import {store} from '../store';
import { refreshToken } from '../storeslices/authSlice';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:5000', // Replace with your API base URL
});

var state=null;

axiosInstance.interceptors.request.use(
  
    (config) => {
        state=store.getState();
      const token = state.auth.token;
      console.log("TOKEN",token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      console.log("ERROR",error);
      // If the error status is 401 and there is no originalRequest._retry flag,
      // it means the token has expired and we need to refresh it
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        try {
          const refreshToken = state.auth.refreshToken;
          const response = await axios.post('/Auth/RefreshToken', { refreshToken });
          const { token } = response.data;
  
          store.dispatch(refreshToken(response.data));
  
          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch (error) {
          // Handle refresh token error or redirect to login
        }
      }
  
      return Promise.reject(error);
    }
  );

export default axiosInstance;;