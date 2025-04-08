import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers = req.headers || {};
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const loginUser = (data: any) => API.post('/auth/login', data);
export const registerUser = (data: any) => API.post('/auth/signup', data);

export const fetchProducts = () => API.get('/products');
export const createProduct = (data: any) => API.post('/products', data);
export const updateProduct = (id: string, data: any) => API.put(`/products/${id}`, data);
export const deleteProduct = (id: string) => API.delete(`/products/${id}`);
