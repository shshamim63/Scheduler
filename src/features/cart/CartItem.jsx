import PropTypes from 'prop-types';

import { formatCurrency } from '../../utils/currency';

import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getCurrentQuantityByID } from './cartSlice';

const CartItem = ({ item }) => {
  const { name, quantity, totalPrice, pizzaId } = item;

  const currentQuantity = useSelector(getCurrentQuantityByID(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times;{name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pizzaId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }),
};

export default CartItem;
