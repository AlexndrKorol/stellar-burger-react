import React, { FC } from "react";
import styles from "./order-feed-list.module.css";
import cn from "classnames";
import { OrderFeedElement } from "../order-feed-element/order-feed-element";

export const OrderFeedList: FC = () => {
  
  return (
    <section className={styles.container}>
      <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
      <div className={cn(styles.list, 'custom-scroll')}>
        <OrderFeedElement to={'/feed/034534'} />
        <OrderFeedElement to={'/feed/034534'} />
        <OrderFeedElement to={'/feed/034534'} />
        <OrderFeedElement to={'/feed/034534'} />
        <OrderFeedElement to={'/feed/034534'} />
      </div>
    </section>
  );
};

export default OrderFeedList;