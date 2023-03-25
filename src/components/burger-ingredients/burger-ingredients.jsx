import { useEffect, useState, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Category } from '../category/category';
import PropTypes from 'prop-types';
import ingredientPropTypes from '../../utils/prop-types';
import styles from './burger-ingredients.module.css';
import cn from 'classnames';
import { throttle } from 'throttle-debounce';

export const BurgerIngredients = ({ ingredients }) => {
  const [current, setCurrent] = useState('buns');
  const containerRef = useRef();
  const bunRef = useRef();
  const mainRef = useRef();
  const sauceRef = useRef();

  const buns = ingredients.filter((item) => item.type === 'bun');
  const main = ingredients.filter((item) => item.type === 'main');
  const sauce = ingredients.filter((item) => item.type === 'sauce');

  function handleClickTab(tab) {
    setCurrent(tab);
    const title = document.getElementById(tab);
    if (title) title.scrollIntoView({ behavior: 'smooth' });
  }

  const getCoords = (ref) => ref.current.getBoundingClientRect();

  useEffect(() => {
    containerRef.current.addEventListener(
      'scroll',
      throttle(250, () => {
        const containerRect = getCoords(containerRef);
        const bunRect = getCoords(bunRef);
        const mainRect = getCoords(mainRef);
        const sauceRect = getCoords(sauceRef);

        const deltas = [bunRect, mainRect, sauceRect].map((rect) => Math.abs(containerRect.top - rect.top));

        const min = Math.min(...deltas);
        const index = deltas.indexOf(min);
        const tab = ['buns', 'main', 'sauce'][index];
        setCurrent(tab);
      }),
    );
  }, []);

  return (
    <section className={styles.ingredients}>
      <div className={cn(styles.menu, 'mb-10')}>
        <Tab value='buns' active={current === 'buns'} onClick={handleClickTab}>
          Булки
        </Tab>
        <Tab value='main' active={current === 'main'} onClick={handleClickTab}>
          Соусы
        </Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={handleClickTab}>
          Начинки
        </Tab>
      </div>
      <section ref={containerRef} className={cn(styles.container, 'custom-scroll')}>
        <Category title='Булки' id='buns' ingredients={buns} headerRef={bunRef} />
        <Category title='Начинки' id='main' ingredients={main} headerRef={mainRef} />
        <Category title='Соусы' id='sauce' ingredients={sauce} headerRef={sauceRef} />
      </section>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};

export default BurgerIngredients;

