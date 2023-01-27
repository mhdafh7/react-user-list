import UserItem from './UserItem';

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: boolean;
  login: Date;
};
type Props = {
  users: [];
};

const UsersList = ({ users }: Props) => {
  // const [newUser, setNewUser] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   role: '',
  // });
  // const queryClient = useQueryClient();
  //
  // const addUserMutation = useMutation(addUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('users');
  //   },
  // });
  // const updateUserMutation = useMutation(updateUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('users');
  //   },
  // });
  // const deleteUserMutation = useMutation(deleteUser, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('users');
  //   },
  // });
  // const handleAddUser = (e: Event) => {
  //   e.preventDefault();
  //   addUserMutation.mutate({
  //     id: 42,
  //     name: `${newUser.firstName} ${newUser.lastName}`,
  //     email: newUser.email,
  //     role: newUser.role,
  //   });
  // };

  return (
    <tbody className="">
      {users.map((user: User) => {
        return (
          <UserItem
            key={user.id}
            name={user.name}
            email={user.email}
            avatar={user.avatar}
            role={user.role}
            login={user.login}
            status={user.status}
          />
        );
      })}
    </tbody>
  );
};
export default UsersList;
