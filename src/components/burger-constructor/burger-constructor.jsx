import { ConstructorElement, Button, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'
import cn from 'classnames';


export const BurgerConstructor = ({constructorIngredients}) => {
  const buns = constructorIngredients.find(data => data.type === 'buns')

  return (
    <>
    <section className={cn(styles.wrapper, styles.scroll,'custom-scroll')}>
      <ConstructorElement {...buns} type='top' isLocked={true} />
        <div>
          {constructorIngredients.map(data => <ConstructorElement thumbnail={data.image} {...data} />)}
        </div> 
      <ConstructorElement {...buns} type='bottom' isLocked={true} />
    </section>
    </>
    
  )
}

