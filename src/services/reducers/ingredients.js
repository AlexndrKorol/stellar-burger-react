import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import * as api from '../../utils/api';

const initialState = {
  data: [],
  isLoading: false,
  isLoaded: false,
  error: null
};

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, {
    dispatch,
    getState,
    rejectWithValue,
    fulfillWithValue
  }) => {
      const res = await api.getIngredients();
      return fulfillWithValue(res.data);
  }
)

export const slice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isLoaded = true;
        state.error = null;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
  },
})

export const ingredientsSelectors = {
  byId: (id) => (state) => state.data.find((item) => item._id === id),
};
export default slice.reducer;



// import {
//   createAsyncThunk,
//   createSlice,
//   PayloadAction
// } from "@reduxjs/toolkit";
// import { AppState } from '../store';
// import { Ingredient, IngredientType, IngredientWithUid } from "../../types/ingredient";
// import { createAppAsyncThunk } from "../thunk";
// import * as api from '../../utils/api';


// type State = {
//   data: IngredientWithUid[];
//   isLoading: boolean;
//   isLoaded: boolean;
//   error: string | null;
// }

// const initialState: State = {
//   data: [],
//   isLoading: false,
//   isLoaded: false,
//   error: null,
// };

// export const fetchIngredients = createAsyncThunk(
//   'ingredients/fetchIngredients',
//   async (_, {
//     dispatch,
//     getState,
//     rejectWithValue,
//     fulfillWithValue
//   }) => {
//       const res = await api.getIngredients();
//       return fulfillWithValue(res.data);
//   }
// )

// export const slice = createSlice({
//   name: 'ingredients',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchIngredients.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchIngredients.fulfilled, (state, action) => {

//         state.data = action.payload.data; //TODO
        
//         state.isLoading = false;
//         state.isLoaded = true;
//         state.error = null;
//       })
//       .addCase(fetchIngredients.rejected, (state, action) => {
//         state.error = action.payload; //TODO
//         state.isLoading = false;
//       });
//   },
// });

// export const ingredientsSelectors = {
//   byId: (id: string) => (state: AppState) => state.ingredients.data.find((item) => item._id === id),
// };

// export default slice.reducer;


