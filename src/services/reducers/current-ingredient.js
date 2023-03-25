import {
  createSlice
} from '@reduxjs/toolkit';

const getInitialState = () => ({ data: null });

export const slice = createSlice({
  name: 'currentIngredient',
  initialState: getInitialState(),
  reducers: {
    set: (state, action) => {
      state.data = action.payload;
    },
    unset: (state) => {
      state.data = null;
    },
  }
});

export const currentIngredientActions = slice.actions;
export default slice.reducer;