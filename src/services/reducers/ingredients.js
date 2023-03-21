import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiData } from '../../utils/api';



//создаем срез

const initialState = {
  data: [],
  isLoading: false,
  error: null
}

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, {dispatch , getState, rejectWithValue, fulfillWithValue}) => {
    const response = await getApiData();
      if(!response) {
        return rejectWithValue({message: 'Ошибка на стороне сервера'});
      }
    return response.data;
  }
)

export const ingredientsSlice = createSlice({
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
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
  },
})

export default ingredientsSlice.reducer;