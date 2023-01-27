import Pagination from '../components/Pagination';
import {DownloadIcon, PlusIcon} from '../components/Svgs';
import TableHeaders from '../components/TableHeaders';
import UserModal from '../components/UserModal';
import UsersList from '../components/UsersList';
import Head from 'next/head';
import React from 'react';
import {useState} from 'react';
import {useQueryClient, useQuery, useMutation} from 'react-query';
import {getUsers} from '../api/usersApi';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
  };

  const queryClient = useQueryClient();
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
    content = (
      <table className="items-center w-full border-collapse">
        <TableHeaders />
        {/* Users List container */}
        <UsersList users={users} />
      </table>
    );
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
            <button className="px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3 hover:bg-gray-200 transition-color">
              <DownloadIcon />
              Download CSV
            </button>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl flex justify-center items-center gap-3 hover:bg-blue-800 transition-color"
            >
              <PlusIcon />
              Add user
            </button>
          </div>
        </section>
        {modalOpen ? (
          <UserModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        ) : null}
        <div className="block w-full overflow-x-auto">{content}</div>
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
