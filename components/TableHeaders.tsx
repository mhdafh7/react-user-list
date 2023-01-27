const TableHeaders = () => {
  return (
    <thead className="h-8 text-sm text-gray-400">
      <tr>
        <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
          Name
        </th>
        <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
          Status
        </th>
        <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
          Role
        </th>
        <th className="px-6 align-middle py-3 text-sm whitespace-nowrap font-semibold text-left">
          Last Login
        </th>
      </tr>
    </thead>
  );
};
export default TableHeaders;
