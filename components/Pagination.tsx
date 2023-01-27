import React from 'react';
import {NextIcon, PrevIcon} from './Svgs';

type PageBtnProps = {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};
type Props = PageBtnProps & {users: []};

const PageBtn = ({pageNumber, setPageNumber}: PageBtnProps) => {
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
const Pagination = ({pageNumber, setPageNumber}: Props) => {
  const prevPage = () => {
    setPageNumber((prev: number) => prev - 1);
  };
  const nextPage = () => {
    setPageNumber((prev: number) => prev + 1);
  };

  const pagesArray = [1, 2, 3, 4, 5];
  return (
    <nav className="flex justify-between items-center px-4 py-5 border-t-gray-200 border-t-2">
      <button
        onClick={prevPage}
        className={`${
          pageNumber === 1
            ? 'cursor-not-allowed opacity-50 pointer-events-none'
            : ''
        } px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3 hover:bg-slate-200 transition-colors`}
      >
        <PrevIcon />
        Previous
      </button>
      <section className="flex gap-4">
        {pagesArray.map(pageNumber => (
          <PageBtn
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            key={pageNumber}
          />
        ))}
      </section>
      <button
        onClick={nextPage}
        className={`${
          pageNumber === 5
            ? 'pointer-events-none opacity-50 cursor-not-allowed'
            : ''
        } px-4 py-2 border-2 rounded-xl flex justify-center items-center gap-3 hover:bg-slate-200 transition-colors`}
      >
        Next
        <NextIcon />
      </button>
    </nav>
  );
};

// TODO: highlight active page button
export default Pagination;
