import UserItem from './UserItem';
import { useQueryClient, useMutation } from 'react-query';
import { updateUser, addUser, deleteUser } from '../api/usersApi';
import { useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: boolean,
  login: Date
};
type Props = {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  users: [];
};

const UsersList = ({ isLoading, isError, error, users }: Props) => {
  // const [newUser, setNewUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   role: '',
  // });
  // const queryClient = useQueryClient();
  //
  // const addUserMutation = useMutation(addUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('users');
  //   },
  // });
  // const updateUserMutation = useMutation(updateUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('users');
  //   },
  // });
  // const deleteUserMutation = useMutation(deleteUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('users');
  //   },
  // });
  // const handleAddUser = (e: Event) => {
  //   e.preventDefault();
  //   addUserMutation.mutate({
  //     id: 42,
  //     name: `${newUser.firstName} ${newUser.lastName}`,
  //     email: newUser.email,
  //     role: newUser.role,
  //   });
  // };
  let content;
  if (isLoading) {
    content = <p className="text-center">Loading....</p>;
  } else if (isError) {
    content = (
      <p className="text-red-600 text-center">{(error as Error).message}</p>
    );
  } else {
    content = users.map((user: User) => {
      return (
        <UserItem
          key={user.id}
          name={user.name}
          email={user.email}
          avatar={user.avatar}
          role={user.role}
          login={user.login}
          status={user.status}
        />
      );
    });
  }
  return <div className="flex flex-col w-full">{content}</div>;
};
export default UsersList;
