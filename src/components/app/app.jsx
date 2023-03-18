import { useEffect, useState } from 'react';

import { getApiData } from '../../utils/api'
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor'
import styles from './app.module.css';
import cn from 'classnames'


export const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    getApiData()
      .then(({data}) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={cn(styles.app, 'pb-10')}> 
      <AppHeader />
      <h1 className={cn(styles.title,'text text_type_main-large mt-10 mb-5')}>Соберите бургер</h1>
      <main className={styles.main}>
        <BurgerIngredients ingredients={data}/> 
        <BurgerConstructor constructorIngredients={data} />
      </main>
    </div>

  );
}

