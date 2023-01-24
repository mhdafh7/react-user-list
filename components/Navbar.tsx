import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex shadow-sm shadow-gray-200 w-max overflow-hidden rounded-xl text-gray-700 border-2">
      {/* navbar borders/shadows */}
      <ul className="flex gap-3 text-center">
        <Link href="">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-all">General</li>
        </Link>
        <Link href="/">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-all">Users</li>
        </Link>
        <Link href="">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-all">Plan</li>
        </Link>
        <Link href="">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-all">Billing</li>
        </Link>
        <Link href="">
          <li className="px-3 py-3 border-x-slate-300 hover:bg-slate-200 transition-all">Integrations</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
