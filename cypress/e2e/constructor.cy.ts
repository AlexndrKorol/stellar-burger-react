describe("страница Конструктор", () => {
  const getModal = () => cy.get("#modals");

  it("открытие модального окна с описанием ингредиента", () => {
    cy.visit("/");

    cy.intercept("https://norma.nomoreparties.space/api/ingredients").as(
      "api.ingredients"
    );

    cy.wait("@api.ingredients");

    cy.get(".burger-ingredient").first().click();

    getModal().contains("Детали ингредиента");
  });

  it("отображение в модальном окне данных ингредиента", () => {
    cy.visit("/");

    const mockIngredient = {
      _id: "643d69a5c3f7b9001cfa093c",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 777,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
    };

    const mockIngredients = {
      success: true,
      data: [mockIngredient],
    };

    cy.intercept(
      "https://norma.nomoreparties.space/api/ingredients",
      mockIngredients
    ).as("api.ingredients");

    cy.wait("@api.ingredients");

    cy.get(".burger-ingredient").first().click();

    getModal().contains("Детали ингредиента");

    getModal().contains(mockIngredient.name);
    getModal().contains("Калории,ккал");
    getModal().contains(mockIngredient.calories);
    getModal().contains("Белки,г");
    getModal().contains(mockIngredient.proteins);
    getModal().contains("Жиры,г");
    getModal().contains(mockIngredient.fat);
    getModal().contains("Углеводы,г");
    getModal().contains(mockIngredient.carbohydrates);

    getModal().get(`img[src="${mockIngredient.image_large}"]`);
  });
});
