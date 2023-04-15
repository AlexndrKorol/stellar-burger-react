import { useParams } from "react-router-dom";
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";
import { Modal } from "../../components/modal/modal";
import { useIngredients } from "../../hooks/ingredients";
import { FC } from "react";
import { TModalProps, TModalPropsId } from "../../types/modal";


type IdParams = {
  id: string;
}

export const IngredientModalPage: FC<TModalProps> = () => {
  const params = useParams<keyof IdParams>() as IdParams;
  const { getById } = useIngredients();
  const ingredient = getById(params.id); 

  if (!ingredient) {
    return null;
  }

  return (
    <Modal title="Детали ингредиента" onClose={() => window.history.back()}>
      <IngredientDetails data={ingredient} />
    </Modal>
  );
};
