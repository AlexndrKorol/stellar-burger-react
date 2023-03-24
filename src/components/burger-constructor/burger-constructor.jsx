import React from 'react';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';
import { useDrop } from 'react-dnd';
import { burgerConstructorActions, burgerConstructorSelectors } from '../../services/reducers/burger-constructor';
import { useDispatch, useSelector } from 'react-redux';
import styles from './burger-constructor.module.css';
import cn from 'classnames';

export const BurgerConstructor = () => {
  const bun = useSelector(burgerConstructorSelectors.bun);
  const ingredients = useSelector(burgerConstructorSelectors.ingredients);
  const sum = useSelector(burgerConstructorSelectors.sum);
  const isEmpty = !bun && ingredients.length === 0;
  const dispatch = useDispatch();

  const [orderModal, setOrderModal] = React.useState(false);
  const handleOrderClick = () => {
    setOrderModal(true);
  };
  const [dropState, drop] = useDrop(
    () => ({
      accept: 'ingredient',
      drop: (item) => {
        console.log('BurgerConstructor.drop', { item });

        if (item.type === 'bun') {
          dispatch(burgerConstructorActions.addBun(item))
        } else {
          dispatch(burgerConstructorActions.addIngredient(item));
        }
      },
    }),
  )

  if (isEmpty) {
    return <div ref={drop} className={cn(styles.empty, "text text_type_main-medium")}>Добавьте булку и ингредиенты</div>
  }

  const onDelete = (data) => {
    dispatch(burgerConstructorActions.removeIngredient(data));
  };

  return (
    <section ref={drop} className={styles.wrapper}>
      <div className="ml-6 mb-4">
        {!!bun && <ConstructorElement
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
          type='top'
          isLocked={true} />}
      </div>

      <div className={cn(styles.container, 'custom-scroll')}>
        {ingredients.length === 0 && <div className={cn(styles.empty, "text text_type_main-medium")}>Добавьте ингредиенты</div>}
        {ingredients.map((data, index) => {
          const lastBun = ingredients.length - 1 === index;

          return (
            // Куратор сказала этот див вынести в отельный компонент для драга внутри списка? То есть внутри этого компонента будет и драг и дроп. То есть дроп идет на элемент, а не в контейнер. https://react-dnd.github.io/react-dnd/examples/sortable/simple
            <div className={cn(styles.element_item, lastBun ? '' : 'mb-4')} key={data.uniqueId}>
              <DragIcon />
              <ConstructorElement
                text={data.name}
                price={data.price}
                thumbnail={data.image}
                handleClose={() => onDelete(data)} />
            </div>
          )
        }
        )}
      </div>
      <div className="ml-6 mt-4">
        {!!bun && <ConstructorElement
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
          type="bottom"
          isLocked={true} />}
      </div>

      <div className={cn(styles.order_sum)}>
        <div className={styles.order_container}>
          <p className="text text_type_digits-medium mr-2">{sum}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOrderClick}
        >Оформить заказ
        </Button>
      </div>
      {orderModal && <Modal onClose={() => setOrderModal(false)}>
        <OrderDetails data={orderModal} />
      </Modal>}
    </section>
  )
}

export default BurgerConstructor;
