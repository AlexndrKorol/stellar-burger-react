import { FC }from 'react';
import styles from './order-feed-element.module.css';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { Order } from '../../types/order';
import { useIngredients } from '../../hooks/ingredients';
import { IngredientType } from '../../types/ingredient';


interface Props {
    to: string;
    order: Order;
}

export const OrderFeedElement: FC<Props> = ({ to, order }) => {
    const { getById } = useIngredients();

    const orderIngredients = order.ingredients.map((id) => getById(id))
        .filter(Boolean);

    const sum = orderIngredients.reduce((acc, ingredient) => {
        if (ingredient.type === IngredientType.BUN) {
            acc += ingredient.price * 2;
        } else {
            acc += ingredient.price;
        }
        return acc;
    }, 0);

    return (
    <Link className={styles.container} to={to}>
        <div className={styles.digits}>
            <p className='text text_type_digits-default'>#{order.number}</p>
            <FormattedDate
                className={'text text_type_main-default text_color_inactive'}
                date={new Date(order.createdAt)}
            />
        </div>
        <h2 className='text text_type_main-medium'>{ order.name }</h2>
        <div className={styles.compound}>
            <div className={styles.items}>
                <div className={styles.item__container}>
                    <img src='https://code.s3.yandex.net/react/code/meat-02.png' alt='Изображение ингредиента' className={styles.image} />
                </div>
                <div className={styles.item__container}>
                    <img src='https://code.s3.yandex.net/react/code/meat-04.png' alt='Изображение ингредиента' className={styles.image} />
                </div>
                <div className={styles.item__container}>
                    <img src='https://code.s3.yandex.net/react/code/sauce-03-mobile.png' alt='Изображение ингредиента' className={styles.image} />
                </div>
                <div className={styles.item__container}>
                    <img src='https://code.s3.yandex.net/react/code/sauce-04-mobile.png' alt='Изображение ингредиента' className={styles.image} />
                </div>
                <div className={styles.item__container}>
                    <img src='https://code.s3.yandex.net/react/code/meat-01.png' alt='Изображение ингредиента' className={styles.image} />
                </div>
            </div>
            <div className={styles.price}>
                <p className='text text_type_digits-default'>{ sum }</p>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    </Link>
    )
}

export default OrderFeedElement;