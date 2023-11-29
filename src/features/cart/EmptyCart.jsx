import LinkButton from '../../ui/LinkButton';

const EmptyCart = () => {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu" type="link">
        &larr; Back to menu
      </LinkButton>
      <p className="mt-7 font-semibold">
        Your cart is empty, lets add some pizzas in your wishlist :)
      </p>
    </div>
  );
};

export default EmptyCart;
