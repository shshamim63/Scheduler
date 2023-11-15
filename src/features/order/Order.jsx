import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurants";
import OrderItem from "./OrderItem";

const Order = () => {
  const order = useLoaderData();

  const { id, status, priority, orderPrice, estimatedDelivery, cart } = order;

  return (
    <div>
      <div>
        <h2>Order #{id} status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
        <div>
          <p>Price {orderPrice}</p>
          <p>{estimatedDelivery}</p>
        </div>
        <div>
          {cart.map((item, index) => (
            <OrderItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const loader = async ({ params }) => {
  const order = await getOrder(params.id);
  return order;
};

export default Order;
