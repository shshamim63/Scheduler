import { useDispatch, useSelector } from 'react-redux';

import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

import { clearCart, getCart } from './cartSlice';
import { getUserContext, getUserInfo } from '../user/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const currentUser = useSelector(getUserInfo);
  const cart = useSelector(getCart);

  const { userInfo, status } = useSelector(getUserContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    if (!userInfo?.email && status !== 'idle') navigate('/login');
  }, [userInfo, status, navigate]);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu" type="link">
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, {currentUser?.email}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order Pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
