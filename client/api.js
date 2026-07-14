import axios from 'axios';

const api = axios.create({ baseURL: `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api`, timeout: 10000 });
api.interceptors.request.use(config => { const token = localStorage.getItem('pickme-token'); if (token) config.headers.Authorization = `Bearer ${token}`; return config; });

export const pickmeApi = {
  health: () => api.get('/health'),
  products: params => api.get('/products', { params }),
  login: credentials => api.post('/auth/login', credentials),
  register: account => api.post('/auth/register', account),
  me: () => api.get('/users/me'),
  cart: items => items === undefined ? api.get('/cart') : api.put('/cart', { items }),
  wishlist: items => items === undefined ? api.get('/wishlist') : api.put('/wishlist', { items }),
  createOrder: order => api.post('/orders', order)
};
