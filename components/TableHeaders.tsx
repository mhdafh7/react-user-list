const TableHeaders = () => {
  return (
    <div className="flex py-2 px-6 mb-3 h-8 w-full text-sm text-gray-500">
      <span className="flex-1 ml-16">Name</span>
      <ul className="flex gap-20">
        <li>Status</li>
        <li>Role</li>
        <li className="mr-28">Last Login</li>
      </ul>
    </div>
  );
};
export default TableHeaders;
