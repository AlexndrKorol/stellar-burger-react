import { useEffect } from 'react';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor'
import styles from './app.module.css';
import cn from 'classnames'
import { fetchIngredients } from '../../services/reducers/ingredients'
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const data = useSelector((state) => state.ingredients.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={cn(styles.app)}>
      <AppHeader />
      <h1 className={cn(styles.title, 'text text_type_main-large mt-10 mb-5')}>Соберите бургер</h1>
      <main className={cn(styles.main, 'pb-10')}>
        <BurgerIngredients ingredients={data} />
        <BurgerConstructor constructorIngredients={data} />
      </main>
    </div>

  );
}

