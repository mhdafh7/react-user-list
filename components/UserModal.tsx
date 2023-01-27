import {CloseIcon} from './Svgs';
import {useMutation, useQueryClient} from 'react-query';
import {addUser} from '../api/usersApi';
import {FormEvent, useId, useState} from 'react';
import React from 'react';

type Props = {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
};

const UserModal = ({setModalOpen, modalOpen}: Props) => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
  });
  const queryClient = useQueryClient();
  const newId = useId();

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addUserMutation.mutate({
      id: newId,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
    setNewUser({
      name: '',
      email: '',
      role: '',
    });
  };
  const handleChange = (e: FormEvent) => {
    console.log(e);
  };
  return (
    <div className="absolute w-full h-full bg-black bg-opacity-10 backdrop-blur-sm grid place-items-center px-6">
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="flex flex-col gap-4 top-0 right-0 bg-white px-10 pb-12 pt-8 rounded-lg relative"
      >
        {/* modal close button */}
        <span
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
          className="absolute -top-2 -right-2 bg-gray-600 rounded-full p-2 hover:bg-black transition-color cursor-pointer"
        >
          <CloseIcon />
        </span>
        <h4 className="font-bold text-xl mb-4">User Details</h4>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Name</label>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Role</label>
          <input
            type="text"
            name="role"
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Email</label>
          <input
            type="text"
            name="email"
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-700 text-white hover:bg-blue-900 transition-colors px-2 py-3 border-none mt-3 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default UserModal;
