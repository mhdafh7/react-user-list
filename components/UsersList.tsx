import {AxiosRequestConfig} from 'axios';
import React from 'react';
import UserItem from './UserItem';

type User = {
  id: AxiosRequestConfig;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: boolean;
  login: string;
};
type Props = {
  users: [];
};

const UsersList = ({users}: Props) => {
  return (
    <tbody>
      {users.map((user: User) => {
        return (
          <UserItem
            key={user.name}
            id={user.id}
            name={user.name}
            email={user.email}
            avatar={user.avatar}
            role={user.role}
            login={user.login}
            status={user.status}
          />
        );
      })}
    </tbody>
  );
};
export default UsersList;
