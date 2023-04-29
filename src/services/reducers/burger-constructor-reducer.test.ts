import {
  Ingredient,
  IngredientType,
  IngredientWithUid,
} from "../../types/ingredient";
import reducer, { getInitialState, slice } from "./burger-constructor";

describe("burger constructor reducer", () => {
  const bun: Ingredient = {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: IngredientType.BUN,
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  };

  it("initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(getInitialState());
  });

  it("addBun action", () => {
    const action = slice.actions.addBun(bun);
    const nextState = reducer(undefined, action);
    expect(nextState).toMatchObject({
      bun,
    });
  });

  it("addIngredient action", () => {
    const action = slice.actions.addIngredient(bun);
    const nextState = reducer(undefined, action);

    expect(nextState).toMatchObject({
      ingredients: [
        {
          ...bun,
          uniqueId: expect.stringMatching(""),
        },
      ],
    });
  });

  it("addIngredient action x2", () => {
    const action = slice.actions.addIngredient(bun);
    const state1 = reducer(undefined, action);
    const state2 = reducer(state1, action);

    expect(state2.ingredients).toHaveLength(2);
    expect(state2.ingredients[0].uniqueId).not.toEqual(
      state2.ingredients[1].uniqueId
    );
  });

  it("removeIngredient action", () => {
    const ingredientWithId: IngredientWithUid = { ...bun, uniqueId: "myid" };

    const action = slice.actions.removeIngredient(ingredientWithId);
    const prevState = {
      ...getInitialState(),
      ingredients: [ingredientWithId],
    };
    const nextState = reducer(prevState, action);

    expect(nextState.ingredients).toEqual([]);
  });

  it("reset action", () => {
    const ingredientWithId: IngredientWithUid = { ...bun, uniqueId: "myid" };

    const action = slice.actions.reset();
    const prevState = {
      bun: ingredientWithId,
      ingredients: [ingredientWithId],
    };
    const nextState = reducer(prevState, action);

    expect(nextState).toEqual(getInitialState());
  });
});
