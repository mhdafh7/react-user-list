import Navbar from './Navbar';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='flex flex-col m-auto gap-10 pt-6'>
      <h1 className='font-semibold text-3xl'>Company Settings</h1>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
