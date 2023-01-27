import { useState } from 'react';

type PageBtnProps = {
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
};

const PageBtn = ({ pageNumber, setPageNumber }: PageBtnProps) => {
  return (
    <button
      onClick={() => {
        setPageNumber(pageNumber);
      }}
    >
      {pageNumber}
    </button>
  );
};
const Pagination = ({ users, pageNumber, setPageNumber }: any) => {
  const lastPage = () => {
    setPageNumber(users.total);
  };
  const firstPage = () => {
    setPageNumber(1);
  };

  const pagesArray = [1, 2, 3, 4, 5, 6];
  return (
    <nav className="flex justify-between items-center px-4 py-5 border-t-gray-200 border-t-2">
      <button
        onClick={firstPage}
        className="px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3 hover:bg-slate-200 transition-colors"
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Previous
      </button>
      <section className="flex gap-4">
        {pagesArray.map((pageNumber) => (
          <PageBtn
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            key={pageNumber}
          />
        ))}
      </section>
      <button
        onClick={lastPage}
        className="px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3 hover:bg-slate-200 transition-colors"
      >
        Next
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
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </nav>
  );
};
export default Pagination;
