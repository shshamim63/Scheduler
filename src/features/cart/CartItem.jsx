import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/currency';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

const CartItem = ({ item }) => {
  const { name, quantity, totalPrice, pizzaId } = item;

  const dispatch = useDispatch();

  const handleRemoveItemFromCart = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times;{name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleRemoveItemFromCart}>
          Delete
        </Button>
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
