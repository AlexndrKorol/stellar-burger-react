import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from '../services/reducers/ingredients'
import { AppState } from '../services/store';
import { IngredientWithUid } from '../types/ingredient';

export const useIngredients = () => {
  const dispatch = useDispatch();
  const { data, isLoaded }: { data: IngredientWithUid[], isLoaded: boolean } = useSelector((state: AppState) => state.ingredients);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchIngredients() as any); // TODO
    }
  }, [dispatch, isLoaded]);

  return {
    ingredients: data,
    getById: (id: IngredientWithUid['_id']) => data.find((item) => item._id === id),
  };
};