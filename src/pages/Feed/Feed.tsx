import { FC, useEffect } from "react";
import OrderFeedList from "../../components/order-feed-list/order-feed-list";
import OrderStats from "../../components/order-stats/order-stats";
import { useIngredients } from '../../hooks/ingredients';
import { wsConnectFeed, wsDisconnectFeed } from '../../services/reducers/feed-page/action';
import { useAppDispatch } from '../../services/store';
import styles from "./Feed.module.css";

export const FeedPage: FC = () => {
  const dispatch = useAppDispatch();
  useIngredients(); 

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

  return (
    <main className={styles.container}>
      <OrderFeedList />
      <OrderStats />
    </main>
  );
};
