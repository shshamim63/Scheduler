import { useLoaderData, useNavigate } from 'react-router-dom';

import { getMenu } from '../../services/apiRestaurants';

import MenuItem from './MenuItem';
import { useSelector } from 'react-redux';
import { getUserContext } from '../user/userSlice';

const Menu = () => {
  const menu = useLoaderData();
  const navigate = useNavigate();

  const { userInfo, status, authError } = useSelector(getUserContext);

  const userLoggedIn = userInfo?.email && status === 'idle' && !authError;
  console.log('Logged', userInfo, status, authError);
  if (!userLoggedIn) navigate('/login');

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
