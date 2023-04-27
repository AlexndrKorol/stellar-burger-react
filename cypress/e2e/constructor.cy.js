describe("страница Конструктор", () => {
  const getModal = () => cy.get("#modals");

  it("открытие модального окна с описанием ингредиента", () => {
    cy.visit("/");

    cy.intercept("https://norma.nomoreparties.space/api/ingredients").as(
      "api.ingredients"
    );

    cy.wait("@api.ingredients").then(() => {
      cy.get(".burger-ingredient").first().click();
      getModal().contains("Детали ингредиента");
    });
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

    cy.wait("@api.ingredients").then(() => {
      cy.get(".burger-ingredient").first().click();
      getModal().contains("Детали ингредиента");
    });

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

  it("закрытие модальных окон при клике на кнопку закрытия", () => {
    cy.visit("/");
    cy.contains("Краторная булка N-200i").click();
    cy.contains("Детали ингредиента").should('be.visible');
    cy.get('#close').click();
  });

  it("закрытие модальных окон при клике на оверлей", () => {
    cy.visit("/");
    cy.contains("Соус Spicy-X").click();
    cy.contains("Детали ингредиента").should('be.visible');
    cy.get('#overlay').click(-10,-10, {force: true})
  });

  it("проверка dnd и оформления заказа", () => {
    cy.visit("/");
    cy.contains("Краторная булка N-200i").trigger("dragstart");
    cy.get("#empty").trigger("drop");
    cy.get('#container').contains("Краторная булка N-200i")
    cy.contains("Говяжий метеорит (отбивная)").trigger("dragstart");
    cy.get("#container").trigger("drop");
    cy.get('#container').contains('Говяжий метеорит (отбивная)')
    cy.contains('Оформить заказ').click()
    
    cy.get('.input').as("login-form");
    cy.get('@login-form').find('[class^=text]').first().as('email-input');
    cy.get('@login-form').find('[class^=input__icon]').first().click();
    cy.get('@email-input').type('test16@ya.ru');
    cy.get('@login-form').find('[class^=text]').last().as('password-input').type('12345');
    cy.contains('Войти').click();
    cy.contains("Оформить заказ").click();
    cy.get('#orderNumber', {timeout: 16500}).should("exist"); 
      cy.get('#close').click()
    })
  });

  
