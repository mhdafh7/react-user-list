import TableHeaders from '@/components/TableHeaders';
import UserItem from '@/components/UserItem';
import Head from 'next/head';

export default function Home() {
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
      <div className="min-h-screen rounded-xl border-2 shadow-sm shadow-gray-200 w-full flex flex-col">
        {/* Header */}
        <section className="flex justify-between px-4 pb-3 pt-6 border-b-gray-200 border-b-2">
          <div className="mx-3 mb-3">
            <h4 className="text-xl font-medium">Users</h4>
            <p className="text-gray-400">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <div className="mx-3 mb-3 flex gap-3 text-center">
            <button className="px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              Download CSV
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-xl flex justify-center items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add user
            </button>
          </div>
        </section>
        <main className="flex flex-col w-full flex-1">
          <TableHeaders />
          {/* Users List container */}
          <div className='flex flex-col'>
            <UserItem />
            <UserItem />
          </div>
        </main>
        {/* Footer */}
        <section className="flex justify-between items-center px-4 py-5 border-t-gray-200 border-t-2">
          <button className="px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Previous
          </button>
          {/* <div>Pagination</div> */}
          <button className="px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </section>
      </div>
    </>
  );
}
