import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/currency';

const OrderItem = ({ item, isLoadingIngredients, ingredients }) => {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pizzaId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    unitPrice: PropTypes.number.isRequired,
  }),
  isLoadingIngredients: PropTypes.bool.isRequired,
  ingredients: PropTypes.array,
};

export default OrderItem;
