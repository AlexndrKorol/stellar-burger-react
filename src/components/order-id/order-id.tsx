import { FC } from 'react';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector } from '../../services/store';
import { dateFormat, dateOfOrder } from '../../utils/date';
import { Order } from '../../types/order';
import { useIngredients } from "../../hooks/ingredients";
import { IngredientType } from "../../types/ingredient";
import styles from './order-id.module.css';
import cn from 'classnames';


interface OrderIdProps  {
    order: Order;
}

export const OrderId: FC<OrderIdProps> = ({order}) => {

    return (
       <div className={styles.order}>
            <p className={'text text_type_digits-default'}>#{order.number}</p>
            <h2 className={cn(styles.title, 'text text_type_main-medium mt-10')}>{order.name}</h2>
            <p className={cn(styles.status, 'text text_type_main-default mt-3')}>{order.status}</p>
            <h3 className={cn(styles.title, 'text text_type_main-medium mt-15')}>Состав:</h3>
            <ul className={cn(styles.list, 'custom-scroll')}>
                <li className={styles.item}>
                    <div className={styles.image_container}>
                        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-01.png' alt='' />
                        <p className={cn(styles.text, 'text_type_main-default')}>Очень длинное имя ингредиента написано тут</p>
                    </div>
                    <p className={cn(styles.price, 'text text_type_digits-default')}>2 x 20<CurrencyIcon type='primary' /></p>  
                </li>
                <li className={styles.item}>
                    <div className={styles.image_container}>
                        <img className={styles.image} src='https://code.s3.yandex.net/react/code/meat-01.png' alt='' />
                        <p className={cn(styles.text, 'text_type_main-default')}>Имя ингредиента</p>
                    </div>
                    <p className={cn(styles.price, 'text text_type_digits-default')}>2 x 20<CurrencyIcon type='primary' /></p>  
                </li>
            </ul>

            <div className={cn(styles.total, 'mt-10')}>
                <p className={"text text_type_main-default text_color_inactive"}>тут дата заказа</p>
                <div className={cn(styles.total_price, 'mt-1 mb-2')}>
                    <p className="text text_type_digits-default">16800</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
       </div>
    )
};

export default OrderId;
