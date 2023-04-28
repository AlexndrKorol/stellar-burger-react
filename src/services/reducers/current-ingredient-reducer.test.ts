import currentIngredientReducer, {
    currentIngredientActions,
    currentIngredientState,
  } from "./current-ingredient";
  
  describe("currentIngredient reducer", () => {
    const initialState: currentIngredientState = { data: null };
    const testPayload = "test_payload";
  
    it("should return the initial state", () => {
      expect(currentIngredientReducer(undefined, { type: "" })).toEqual(initialState);
    });
  
    it("should handle set action", () => {
      const action = currentIngredientActions.set(testPayload);
      expect(currentIngredientReducer(initialState, action)).toEqual({ data: testPayload });
    });
  
    it("should handle unset action", () => {
      const action = currentIngredientActions.unset();
      expect(currentIngredientReducer(initialState, action)).toEqual({ data: null });
    });
  
    it("should handle reset action", () => {
      const action = currentIngredientActions.reset(testPayload);
      expect(currentIngredientReducer(initialState, action)).toEqual({ data: testPayload });
    });
  });
  