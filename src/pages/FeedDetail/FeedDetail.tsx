import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderId from "../../components/order-id/order-id";
import {
  wsConnectFeed,
  wsDisconnectFeed,
} from "../../services/reducers/feed-page/action";
import { useAppDispatch, useAppSelector } from "../../services/store";
import styles from "./FeedDetail.module.css";

export const FeedDetailPage: FC = () => {
  const orders = useAppSelector((state) => state.feed.data?.orders);
  const params = useParams();
  const id = parseInt(params.id || "");
  const order = orders?.find((order) => order.number === id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      wsConnectFeed({
        wsUrl: "wss://norma.nomoreparties.space/orders/all",
        withTokenRefresh: true,
      })
    );

    return () => {
      dispatch(wsDisconnectFeed());
    };
  }, [dispatch]);

  if (!order) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <p className={"text text_type_digits-default"}>#{order.number}</p>
        <OrderId order={order} />
      </div>
    </div>
  );
};
