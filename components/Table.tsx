import React, {useContext, useMemo} from 'react';
// eslint-disable-next-line node/no-unpublished-import
import {useTable, useSortBy} from 'react-table';
import Image from 'next/image';
import {ArrowDown, ArrowUp, DeleteIcon, EditIcon} from './Svgs';
import {useMutation, useQueryClient} from 'react-query';
import {deleteUser} from '../api/usersApi';
import {ModalContext} from '../Context/ModalContext';

const Table = ({data}) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({row}) => {
          return (
            <span className="px-6 align-middle text-base whitespace-nowrap p-4 text-left flex items-center">
              <span className="rounded-full w-12 h-12 relative overflow-hidden mr-4">
                <Image
                  src={row.original.avatar}
                  alt={`profile picture of ${row.original.name}`}
                  fill
                />
              </span>
              <span className="flex flex-col">
                <h5>{row.original.name}</h5>
                <p className="text-gray-400">{row.original.email}</p>
              </span>
            </span>
          );
        },
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({row}) => {
          return (
            <span
              className={'px-6 align-middle text-base whitespace-nowrap p-4'}
            >
              <span
                className={`flex items-center justify-center gap-2 w-24 ${
                  row.original.status
                    ? 'text-green-900 bg-green-200'
                    : 'text-gray-900 bg-gray-200'
                } py-2 px-1 rounded-3xl`}
              >
                <span
                  className={`h-2 w-2 block rounded-full ${
                    row.original.status ? 'bg-green-900' : 'bg-gray-900'
                  }`}
                ></span>
                {row.original.status ? 'Active' : 'Invited'}
              </span>
            </span>
          );
        },
      },
      {Header: 'Role', accessor: 'role'},
      {
        Header: 'Login',
        accessor: 'login',
        Cell: ({row}) => {
          const date = new Date(row.original.login);

          const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });
          const formattedTime = date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          });

          return (
            <span className="flex flex-col">
              <span>{formattedDate}</span>
              <span className="text-gray-500">{formattedTime}</span>
            </span>
          );
        },
      },
    ],
    []
  );

  // Table hook to add action button at the end of each row
  const tableHooks = hooks => {
    const queryClient = useQueryClient();
    const deleteUserMutation = useMutation(deleteUser, {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    });
    const {setEditModalOpen, setModalData, setModalId} =
      useContext(ModalContext);
    hooks.visibleColumns.push(columns => [
      ...columns,
      {
        id: 'actions',
        Header: '',
        Cell: ({row}) => {
          return (
            <span className="px-6 align-middle text-base whitespace-nowrap p-4">
              <button
                className="text-red-500 mr-2"
                onClick={() => {
                  deleteUserMutation.mutate(row.original.id);
                }}
              >
                <DeleteIcon />
                {/* TODO: Model confirmation on deleting */}
              </button>
              <button
                onClick={() => {
                  setModalData({email: row.original.email, ...row.values});
                  setModalId(row.original.id);
                  setEditModalOpen(true);
                }}
              >
                <EditIcon />
              </button>
            </span>
          );
        },
      },
    ]);
  };
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
    useTable(
      {
        columns,
        data,
      },
      tableHooks,
      useSortBy
    );
  return (
    <table className="w-full" {...getTableProps()}>
      <thead className="h-8 text-sm text-gray-400">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left"
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <span className="flex justify-start items-center">
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDown />
                      ) : (
                        <ArrowUp />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="even:bg-slate-100">
              {row.cells.map(cell => {
                return (
                  <td
                    className="align-middle text-base whitespace-nowrap text-left"
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
