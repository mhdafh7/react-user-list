import Image from 'next/image';

type Props = {
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: boolean;
  login: Date;
};
const UserItem = ({ name, email, avatar, role, status, login }: Props) => {
  let badgeColor, badgeContent;
  // status
  //   ? ((badgeColor = 'green'), (badgeContent = 'Active'))
  //   : ((badgeColor = 'gray'), (badgeContent = 'Invited'));
  if (status) {
    badgeColor = 'green';
    badgeContent = 'Active';
  } else {
    badgeColor = 'gray';
    badgeContent = 'Invited';
  }
  return (
    <div className="flex items-center h-20 px-6 w-full border-b-2 border-b-gray-200 even:bg-slate-200">
      <div className="flex flex-1 gap-4 items-center">
        <span className="rounded-full w-12 h-12 relative overflow-hidden">
          <Image
            src={avatar}
            alt={`profile picture of ${name}`}
            fill
          />
        </span>
        <span className="flex flex-col">
          <h5>{name}</h5>
          <p>{email}</p>
        </span>
      </div>
      <div className="grid grid-cols-4 gap-20 items-center justify-between">
        <span
          className={`py-2 px-4 rounded-2xl text-center bg-${badgeColor}-300 text-${badgeColor}-600"`}
        >
          {badgeContent}
        </span>
        <span>{role}</span>
        <span>
          <p>Date</p>
          <p>Time</p>
        </span>
        <span className="flex gap-3">
          <button>
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button>
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};
export default UserItem;
