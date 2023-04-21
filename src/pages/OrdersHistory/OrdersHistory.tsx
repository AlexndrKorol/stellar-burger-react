import { FC, useEffect } from "react";
import OrderFeedElement from "../../components/order-feed-element/order-feed-element";
import { ProfileNav } from "../../components/profile-nav/profile-nav";
import styles from "./OrdersHistory.module.css";
import cn from "classnames";
import { useAppDispatch } from "../../services/store";
import {
  wsConnectOrder,
  wsDisconnectOrder,
} from "../../services/reducers/orders-page/action";

export const OrdersHistoryPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      wsConnectOrder({
        wsUrl: "wss://norma.nomoreparties.space/orders",
        withTokenRefresh: true,
      })
    );

    return () => {
      dispatch(wsDisconnectOrder());
    };
  }, [dispatch]);

  return (
    <div className={cn(styles.root, "pt-30")}>
      <ProfileNav />
      <div className={cn(styles.orders, "custom-scroll")}>
        {/* <OrderFeedElement to={"/profile/orders/034534"} />
        <OrderFeedElement to={"/profile/orders/034534"} />
        <OrderFeedElement to={"/profile/orders/034534"} />
        <OrderFeedElement to={"/profile/orders/034534"} />
        <OrderFeedElement to={"/profile/orders/034534"} /> */}
      </div>
    </div>
  );
};

export default OrdersHistoryPage;
