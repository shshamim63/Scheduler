import PropTypes from "prop-types";

const OrderItem = ({ item }) => {
  const { name, pizzaId, quantity, totalPrice, unitPrice } = item;
  return (
    <div>
      <p>{name}</p>
      <p>{pizzaId}</p>
      <p>{quantity}</p>
      <p>{totalPrice}</p>
      <p>{unitPrice}</p>
    </div>
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
};

export default OrderItem;
