import { FC } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { Order } from "../../types/order";
import { useIngredients } from "../../hooks/ingredients";
import { IngredientType } from "../../types/ingredient";
import { dateFormat, dateOfOrder } from "../../utils/date";
import styles from "./order-feed-element.module.css";

interface FeedElementProps  {
  to: string;
  order: Order;
}

export const OrderFeedElement: FC<FeedElementProps> = ({ to, order }) => {
  const { getById } = useIngredients();

  const orderIngredients = order.ingredients
    .map((id) => getById(id))
    .filter(Boolean);

  const sum = orderIngredients.reduce((acc, ingredient) => {
    if (ingredient.type === IngredientType.BUN) {
      acc += ingredient.price * 2;
    } else {
      acc += ingredient.price;
    }
    return acc;
  }, 0);

  const orderIngredientsImage = orderIngredients;

  const CurrentDate = dateOfOrder(new Date(order.createdAt));
  const dateFormatCurrent = order.createdAt.toString();

  return (
    <Link className={styles.container} to={to}>
      <div className={styles.digits}>
        <p className="text text_type_digits-default">#{order.number}</p>
        <p className={"text text_type_main-default text_color_inactive"}
        >{`${CurrentDate}, ${dateFormat(dateFormatCurrent)}`}</p>
      </div>
      <h2 className="text text_type_main-medium">{order.name}</h2>
      <div className={styles.compound}>
        <div className={styles.items}>
          {orderIngredientsImage.map((image, index) => {
            const key = `${image._id}_${index}`; //key = { image._id } - без этого возникает ошибка уникальности key ниже
            return (
              <div className={styles.item__container} key={key}>
                <img
                  src={image.image_mobile}
                  className={styles.image}
                  alt={image.name}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{sum}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};

export default OrderFeedElement;
