import {
  configureStore,
  combineReducers
} from "@reduxjs/toolkit";
import ingredientsReducer from "./reducers/ingredients";
import constructionIngredientsReducer from "./reducers/ingredients";
import currentIngredientReducer from "./reducers/ingredients";
import createdOrderReducer from "./reducers/ingredients";

export const store = configureStore({
  reducer: combineReducers({
    ingredients: ingredientsReducer,
    constructionIngredients: constructionIngredientsReducer,
    currentIngredient: currentIngredientReducer,
    createdOrder: createdOrderReducer,
  }),
})

export default store;