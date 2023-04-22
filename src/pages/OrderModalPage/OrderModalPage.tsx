import { FC } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "../../components/modal/modal";
import { useAppSelector } from '../../services/store';
import OrderId from '../../components/order-id/order-id';

export const OrderModalPage: FC = () => {
  const params = useParams();
  const orders = useAppSelector((state) => state.feed.data?.orders);
  const order = orders?.find((order) => order._id === params.id);

  if (!order) {
    return null;
  }

  return (
    <Modal title="Детали ингредиента" onClose={() => window.history.back()}>
      <OrderId order={order} />
    </Modal>
  );
};
