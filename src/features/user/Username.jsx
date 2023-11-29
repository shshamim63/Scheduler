import { useSelector } from 'react-redux';
import { getUserInfo } from './userSlice';

const Username = () => {
  const currentUser = useSelector(getUserInfo);

  if (!currentUser) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">
      {currentUser.email}
    </div>
  );
};

export default Username;
