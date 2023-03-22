import React from 'react';
import { BurgerIngredient } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { Modal } from '../modal/modal';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';
import styles from './category.module.css';
import cn from 'classnames';
import { useDrag } from 'react-dnd';

export const Category = ({ title, id, ingredients }) => {
  const [ingredientWindow, setIngredientWindow] = React.useState(null);
  const closeModalWindow = () => { setIngredientWindow(null) };
  
  const [dragState, drag] = useDrag({
    type: 'ingredient',
    item: 'my-item-1111',
  });

  return (
    <>
      <h2 className="text text_type_main-medium pb-6" id={id}>{title}</h2>
      <div className={cn(styles.list, 'mb-10 pl-4 pr-4')}>
        {ingredients?.map(data => <BurgerIngredient
          key={data._id}
          ref={drag}
          {...data}
          count={1}
          onClick={() => setIngredientWindow(data)} />
        )}
      </div>
      {ingredientWindow && <Modal title="Детали ингредиента" onClose={closeModalWindow}>
        <IngredientDetails data={ingredientWindow} />
      </Modal>}
    </>
  )
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default Category;