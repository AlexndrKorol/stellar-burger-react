// @ts-nocheck
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { burgerConstructorActions } from '../../services/reducers/burger-constructor';
import ingredientPropTypes from '../../utils/prop-types';
import styles from './burger-constructor-item.module.css';
import cn from 'classnames';
import { FC } from 'react'

interface IBurgerConctructor {
  data: {
    name: string;
    price: number;
    image: string;
    __v: number;
    _id: string;
  },
  lastBun?: boolean;
  onDelete?: (data: typeof ingredientPropTypes) => void;
}

interface IDragItem {
  type: 'ingredient-list';
  // item: typeof ;
}

export const BurgerConstructorItem: FC<IBurgerConctructor> = ({ data, lastBun, onDelete }) => {
  const dispatch = useDispatch();

  const [dragState, drag] = useDrag<IDragItem>({
    type: 'ingredient-list',
    item: data,
  });
  const [dropState, drop] = useDrop<IDragItem>(() => ({
    accept: 'ingredient-list',
    item: data,
    drop: (item, ...args) => {
      dispatch(burgerConstructorActions.reorder({ from: item, to: data }));
    },
  }));

  return (
    <div ref={drag}>
      <div ref={drop} className={cn(styles.element_item, lastBun ? '' : 'mb-4')}>
        <DragIcon type={'primary'} />
        <ConstructorElement
          text={data.name}
          price={data.price}
          thumbnail={data.image}
          handleClose={() => onDelete(data)}
        />
      </div>
    </div>
  );
};

export default BurgerConstructorItem;