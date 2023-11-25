import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';

import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={handleRemoveItemFromCart}>
      Delete
    </Button>
  );
};

DeleteItem.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};

export default DeleteItem;
