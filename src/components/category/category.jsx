
import { BurgerIngredient } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './category.module.css'
import cn from 'classnames'

export const Category = ({ title, id, ingredients }) => {
  return (
      <>
          <h2 className='text text_type_main-medium pb-6' id={id}>{title}</h2>
          <div className={cn(styles.list, 'mb-10 pl-4 pr-4')}>
              {ingredients?.map(data => <BurgerIngredient key={data._id} {...data} count={1} />)}
          </div>
      </>
  )
}