import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import { useSelector } from 'react-redux';
import { getUserContext } from '../features/user/userSlice';

const Header = () => {
  const { userInfo } = useSelector(getUserContext);

  return (
    <header className="font-pizza flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast Pizza Co.
      </Link>
      {userInfo?.email && <SearchOrder />}
      <Username />
    </header>
  );
};

export default Header;
