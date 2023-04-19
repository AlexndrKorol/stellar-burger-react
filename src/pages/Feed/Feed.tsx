import { FC } from "react";
import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import OrderStats from "../../components/order-stats/order-stats";
import styles from './Feed.module.css'

export const FeedPage: FC = () => {
    return (
      <main className={styles.container}>
      <OrderFeedList />
      <OrderStats />
      </main>
      )
  };