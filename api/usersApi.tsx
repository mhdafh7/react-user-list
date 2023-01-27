import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://63d3cdd9a93a149755b326eb.mockapi.io/',
});

export const getUsers = async (pageNumber: number) => {
  // 10 users per page
  const res = await usersApi.get(`/users/?limit=10&page=${pageNumber}&seed=abc`);
  return res.data;
};

export const addUser = async (user: any) => {
  return await usersApi.post('/users', user);
};

export const updateUser = async (user: any) => {
  return await usersApi.patch(`/users/${user.id}`, user);
};

export const deleteUser = async ({ id }: any) => {
  return await usersApi.delete(`/users/${id}`, id);
};
