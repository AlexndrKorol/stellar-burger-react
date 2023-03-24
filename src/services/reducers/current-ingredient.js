import {
  createSlice
} from '@reduxjs/toolkit';

const getInitialState = () => null;

export const slice = createSlice({
  name: 'currentIngredient',
  initialState: getInitialState(),
  reducers: {
    set: (state, action) => {
      state = action.payload;
    },
    unset: (state) => {
      state = getInitialState();
    },
  }
});

export default slice.reducer;