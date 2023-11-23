import { useSelector } from 'react-redux';
import { getIsAuthenticated, getUser } from './userSlice';

const Username = () => {
  const currentUser = useSelector(getUser);
  const isAuthenticated = useSelector(getIsAuthenticated);

  if (!isAuthenticated) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">
      {currentUser.email}
    </div>
  );
};

export default Username;
