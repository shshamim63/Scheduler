import { useSelector } from 'react-redux';

const Username = () => {
  const user = useSelector((state) => state.user);

  if (!user.isAuthenticated) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">
      {user.currentUser.email}
    </div>
  );
};

export default Username;
