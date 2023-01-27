import Pagination from '@/components/Pagination';
import TableHeaders from '@/components/TableHeaders';
import UserModal from '@/components/UserModal';
import UsersList from '@/components/UsersList';
import Head from 'next/head';
import { useState } from 'react';
import { useQueryClient, useQuery, useMutation } from 'react-query';
import { getUsers } from '../api/usersApi';

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

  return (
    <>
      <Head>
        <title>Company Settings</title>
        <meta
          name="description"
          content="Company Settings"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="min-h-screen rounded-xl border-2 shadow-sm shadow-gray-200 w-full flex flex-col overflow-hidden relative">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              Download CSV
            </button>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-blue-500 text-white rounded-xl flex justify-center items-center gap-3 hover:bg-blue-800 transition-color"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add user
            </button>
          </div>
        </section>
        {modalOpen ? (
          <UserModal
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
        ) : null}
        <main className="flex flex-col items-center w-full flex-1">
          <TableHeaders />
          {/* Users List container */}
          <UsersList
            isLoading={isLoading}
            isError={isError}
            error={error}
            users={users}
          />
        </main>
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
