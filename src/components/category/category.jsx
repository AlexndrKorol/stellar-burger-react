import React from 'react';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { Modal } from '../modal/modal';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';
import styles from './category.module.css';
import cn from 'classnames';
import { CategoryItem } from '../category-item/category-item';
import { currentIngredientActions } from '../../services/reducers/current-ingredient';
import { useDispatch, useSelector } from 'react-redux';

export const Category = ({ title, id, ingredients, headerRef }) => {
  const ingredientWindow = useSelector((store) => store.currentIngredient.data)

  const dispatch = useDispatch()

  return (
    <>
      <h2 className='text text_type_main-medium pb-6' id={id} ref={headerRef}>
        {title}
      </h2>
      <div className={cn(styles.list, 'mb-10 pl-4 pr-4')}>
        {ingredients?.map((data) => (
          <CategoryItem key={data._id} data={data} setIngredientWindow={() => dispatch(currentIngredientActions.set( data ))} />
        ))}
      </div>
      {ingredientWindow && (
        <Modal title='Детали ингредиента' onClose={() => dispatch(currentIngredientActions.unset())}>
          <IngredientDetails data={ingredientWindow} />
        </Modal>
      )}
    </>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};

export default Category;