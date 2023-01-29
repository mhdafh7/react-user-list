import Image from 'next/image';
import {useQueryClient, useMutation} from 'react-query';
import {deleteUser} from '../api/usersApi';
import {DeleteIcon, EditIcon} from './Svgs';
import React from 'react';
import {AxiosRequestConfig} from 'axios';

type Props = {
  id: AxiosRequestConfig;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: boolean;
  login: string;
};
const UserItem = ({id, name, email, avatar, role, status, login}: Props) => {
  let badgeContent;
  if (status) {
    badgeContent = 'Active';
  } else {
    badgeContent = 'Invited';
  }
  const queryClient = useQueryClient();
  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
  return (
    <tr>
      <td className="px-6 align-middle text-base whitespace-nowrap p-4 text-left flex items-center">
        <span className="rounded-full w-12 h-12 relative overflow-hidden mr-4">
          <Image src={avatar} alt={`profile picture of ${name}`} fill />
        </span>
        <span className="flex flex-col">
          <h5>{name}</h5>
          <p className="text-gray-400">{email}</p>
        </span>
      </td>
      <td className={'px-6 align-middle text-base whitespace-nowrap p-4'}>
        <span
          className={`flex items-center justify-center gap-2 w-24 ${
            status ? 'text-green-900 bg-green-200' : 'text-gray-900 bg-gray-200'
          } py-2 px-1 rounded-3xl`}
        >
          <span
            className={`h-2 w-2 block rounded-full ${
              status ? 'bg-green-900' : 'bg-gray-900'
            }`}
          ></span>
          {badgeContent}
        </span>
      </td>
      <td className="px-6 align-middle text-base whitespace-nowrap p-4">
        {role}
      </td>
      <td className="px-6 align-middle text-base whitespace-nowrap p-4">
        <p>{login}</p>
        <p className="text-gray-400">Time</p>
      </td>
      <td className="px-6 align-middle text-base whitespace-nowrap p-4">
        <button
          className="text-red-500 mr-2"
          onClick={() => {
            deleteUserMutation.mutate(id);
          }}
        >
          <DeleteIcon />
          {/* TODO: Model confirmation on deleting */}
        </button>
        <button>
          {/* TODO: Edit user item */}
          <EditIcon />
        </button>
      </td>
    </tr>
  );
};
export default UserItem;
