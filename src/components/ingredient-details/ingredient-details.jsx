import styles from './ingredient-details.module.css'
import cn from 'classnames'

export const IngredientDetails = ({ data }) => {
  console.log(data);
  return (
      <section>
          <div className={cn(styles.wrapper)}>
            <img src={data.image_large} /> 
          </div>
        <h3 className={cn(styles.title, 'text text_type_main-medium')}>{data.name}</h3>
        <div className={cn(styles.container)}>
          <div className={cn(styles.element)}>
            <p className="text text_type_main-default">Калории, ккал</p>
            <p className="text text_type_digits-default">{data.calories}</p>
          </div>
          <div className={cn(styles.element)}>
            <p className="text text_type_main-default">Белки, г</p>
            <p className="text text_type_digits-default">{data.proteins}</p>
          </div>
          <div className={cn(styles.element)}>
            <p className="text text_type_main-default">Жиры, г</p>
            <p className="text text_type_digits-default">{data.fat}</p>
          </div>
          <div className={cn(styles.element)}>
            <p className="text text_type_main-default">Углеводы, г</p>
            <p className="text text_type_digits-default">{data.carbohydrates}</p>
          </div>
        </div>

      </section>
  )
}

export default IngredientDetails;
