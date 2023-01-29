import React from 'react';
import {CloseIcon} from './Svgs';
import {useMutation, useQueryClient} from 'react-query';
import {updateUser} from '../api/usersApi';
import {FormEvent, useContext} from 'react';
import {ModalContext} from '../Context/ModalContext';

const UserModal = () => {
  const {modalData, modalId, setEditModalOpen, setModalData} =
    useContext(ModalContext);

  const queryClient = useQueryClient();

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateUserMutation.mutate({
      id: modalId,
      name: modalData.name,
      email: modalData.email,
      role: modalData.role,
    });

    setEditModalOpen(false);
  };
  return (
    <div className="absolute z-10 w-full h-full bg-black bg-opacity-10 backdrop-blur-sm grid place-items-center px-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 top-0 right-0 bg-white px-10 pb-12 pt-8 rounded-lg relative"
      >
        {/* modal close button */}
        <span
          onClick={() => {
            setEditModalOpen(false);
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
            value={modalData.name}
            onChange={e => {
              console.log(modalData);

              setModalData({...modalData, [e.target.name]: e.target.value});
            }}
            required
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Email</label>
          <input
            type="text"
            name="email"
            value={modalData.email}
            onChange={e => {
              setModalData({...modalData, [e.target.name]: e.target.value});
            }}
            required
            className="border-2 border-gray-300 rounded-md w-full px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Role</label>
          <input
            type="text"
            name="role"
            value={modalData.role}
            onChange={e => {
              setModalData({...modalData, [e.target.name]: e.target.value});
            }}
            required
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
