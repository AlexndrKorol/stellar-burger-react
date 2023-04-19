import { FC }from 'react';
import styles from './order-feed-element.module.css';
import cn from 'classnames';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderFeedElement: FC = () => {
    const today  = new Date();
    return (
    <section className={styles.container}>
        <div className={styles.digits}>
            <p className='text text_type_digits-default'>#034534</p>
            <FormattedDate
                className={styles.date}
                date={
                    new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate(),
                        today.getHours(),
                        today.getMinutes() - 1,
                    )
                }
            />
        </div>
        <h2 className='text text_type_main-medium'>Death Star Starship Main бургер</h2>
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
                <p className='text text_type_digits-default'>16345</p>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    </section>
    )
}

export default OrderFeedElement;