import PropTypes from 'prop-types';

import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurants';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
};

UpdateOrder.propTypes = {
  order: PropTypes.object.isRequired,
};

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.id, data);
  return null;
}
