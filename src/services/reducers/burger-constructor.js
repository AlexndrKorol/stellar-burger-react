import {
  createSlice
} from "@reduxjs/toolkit";
import {
  v4 as uuidv4
} from 'uuid';

const getInitialState = () => ({
  bun: null,
  ingredients: [],
});

export const slice = createSlice({
  name: 'burgerConstructor',
  initialState: getInitialState(),
  reducers: {
    addBun: (state, action) => {
      state.bun = action.payload;
    },
    addIngredient: (state, action) => {
      const ingredient = {
        ...action.payload,
        uniqueId: uuidv4(),
      };

      state.ingredients = [
        ...state.ingredients,
        ingredient,
      ];
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter((ingredient) => {
        return ingredient.uniqueId !== action.payload.uniqueId;
      });
    },
    reset: (state) => {
      state = getInitialState();
    },
  }
});

export const burgerConstructorSelectors = {
  bun: (state) => state.burgerConstructor.bun,
  ingredients: (state) => state.burgerConstructor.ingredients,
  sum: ({
    burgerConstructor
  }) => {
    const {
      ingredients,
      bun
    } = burgerConstructor;

    const ingredientsSum = ingredients.reduce((acc, ingredient) => {
      return acc + ingredient.price;
    }, 0);

    const bunsSum = bun ? bun.price * 2 : 0;

    return ingredientsSum + bunsSum;
  },
};
export const burgerConstructorActions = slice.actions;
export default slice.reducer;