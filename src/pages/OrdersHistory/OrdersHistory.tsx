import { FC } from 'react';
import OrderFeedElement from '../../components/order-feed-element/order-feed-element';
import { ProfileNav } from '../../components/profile-nav/profile-nav';
import styles from "./OrdersHistory.module.css";
import cn from "classnames";


export const OrdersHistoryPage: FC = () => {

    return (
      <div className={cn(styles.root, 'pt-30')}>
        <ProfileNav />
        <div className={cn(styles.orders, 'custom-scroll')}>
          <OrderFeedElement to={'/profile/orders/034534'} />
          <OrderFeedElement to={'/profile/orders/034534'} />
          <OrderFeedElement to={'/profile/orders/034534'} />
          <OrderFeedElement to={'/profile/orders/034534'} />
          <OrderFeedElement to={'/profile/orders/034534'} />
        </div>
      </div>
    )
  };

  export default OrdersHistoryPage;