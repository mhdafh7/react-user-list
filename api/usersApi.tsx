import axios, {AxiosRequestConfig} from 'axios';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const usersApi = axios.create({
  baseURL: 'https://63d3cdd9a93a149755b326eb.mockapi.io/',
});

export const getUsers = async () => {
  // 10 users per page
  const res = await usersApi.get('/users/?seed=abc');
  return res.data;
};

export const addUser = async (user: User) => {
  return await usersApi.post('/users', user);
};

export const updateUser = async (user: User) => {
  return await usersApi.patch(`/users/${user.id}`, user);
};

export const deleteUser = async (id: AxiosRequestConfig) => {
  return await usersApi.delete(`/users/${id}`, id);
};
