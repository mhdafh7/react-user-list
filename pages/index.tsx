import Pagination from '../components/Pagination';
import {DownloadIcon, PlusIcon} from '../components/Svgs';
import AddUserModal from '../components/AddUserModal';
import EditUserModal from '../components/EditUserModal';
import Head from 'next/head';
import React, {useContext} from 'react';
import {useState} from 'react';
import {useQuery} from 'react-query';
import {getUsers} from '../api/usersApi';
import Button from '../components/Button';
import Table from '../components/Table';
import {ModalContext} from '../Context/ModalContext';

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);

  const {addModalOpen, setAddModalOpen, editModalOpen} =
    useContext(ModalContext);
  const handleOpenModal = () => {
    setAddModalOpen(!addModalOpen);
  };

  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery(['users', pageNumber], () => getUsers(pageNumber), {
    keepPreviousData: true,
  });
  let content;

  if (isLoading) {
    content = <p className="text-center">Loading....</p>;
  } else if (isError) {
    content = (
      <p className="text-red-600 text-center">{(error as Error).message}</p>
    );
  } else {
    content = <Table data={users} />;
  }

  return (
    <>
      <Head>
        <title>Company Settings</title>
        <meta name="description" content="Company Settings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="rounded-xl border-2 shadow-sm shadow-gray-200 w-full flex flex-col justify-center overflow-hidden relative">
        {/* Header */}
        <section className="flex justify-between px-4 pb-3 pt-6 border-b-gray-200 border-b-2">
          <div className="mx-3 mb-3">
            <h4 className="text-xl font-medium">Users</h4>
            <p className="text-gray-400">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <div className="mx-3 mb-3 flex gap-3 text-center">
            <Button
              icon={<DownloadIcon />}
              text="Download CSV"
              additionalClasses="white hover:bg-gray-200"
            />
            <Button
              icon={<PlusIcon />}
              text="Add User"
              onClickFunciton={handleOpenModal}
              additionalClasses={'bg-blue-500 hover:bg-blue-800 text-white'}
            />
          </div>
        </section>
        {addModalOpen ? (
          <AddUserModal />
        ) : editModalOpen ? (
          <EditUserModal />
        ) : null}
        <div className="block w-full overflow-x-auto overflow-y-hidden">
          {content}
        </div>
        {/* Footer */}
        <Pagination
          users={users}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </>
  );
}
