import { FC } from 'react';
import styles from './order-stats.module.css';
import cn from 'classnames';

export const OrderStats: FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.orders}>
                <div className={styles.working}>
                    <h2 className={'text text_type_main-medium'}>Готовы:</h2>
                    <ul className={styles.list}>
                        <li className={cn(styles.done,'text text_type_digits-default')}>034533</li>
                        <li className={cn(styles.done,'text text_type_digits-default')}>034533</li>
                        <li className={cn(styles.done,'text text_type_digits-default')}>034533</li>
                        <li className={cn(styles.done,'text text_type_digits-default')}>034533</li>
                        <li className={cn(styles.done,'text text_type_digits-default')}>034533</li>
                    </ul>
                    
                </div>
                <div className={styles.working}>
                    <h2 className={'text text_type_main-medium'}>В работе:</h2>
                    <ul className={styles.list}>
                        <li className='text text_type_digits-default'>034535</li>
                        <li className='text text_type_digits-default'>034535</li>
                        <li className='text text_type_digits-default'>034535</li> 
                    </ul>
                </div>
            </div>
            <div className={styles.overall}>
                <li className={'text text_type_main-medium'}>Выполнено за все время:</li>
                <li className={cn(styles.shadow, 'text text_type_digits-large')}>28 752</li>            
            </div>
            <div className={styles.overall}>
                <li className={'text text_type_main-medium'}>Выполнено за сегодня:</li>
                <li className={cn(styles.shadow, 'text text_type_digits-large')}>138</li>            
            </div>
        </section>
    )
}

export default OrderStats;