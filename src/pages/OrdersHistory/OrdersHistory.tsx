import { FC } from 'react';
import OrderFeedElement from '../../components/order-feed-element/order-feed-element';
import styles from './OrdersHistory.module.css'


export const OrdersHistoryPage: FC = () => {

    return (
      <>
      <OrderFeedElement />
      <OrderFeedElement />
      <OrderFeedElement />
      <OrderFeedElement />
      <OrderFeedElement />
      </>
    )
  };

  export default OrdersHistoryPage;