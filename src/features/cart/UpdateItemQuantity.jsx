import PropTypes from 'prop-types';

import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  const hanldeAddQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  const hanldeReduceQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-2">
      <Button type="round" onClick={hanldeReduceQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={hanldeAddQuantity}>
        +
      </Button>
    </div>
  );
};

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired,
};

export default UpdateItemQuantity;
