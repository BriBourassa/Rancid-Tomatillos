describe("Main Page Fetch", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.loadPage();
  });

  it("As a user, when I load the application, I can see the title", () => {
    cy.get("h1").contains("🍅 RANCID 🍅 TOMATILLOS 🍅");
  });

  it("As a user, when I load the application, I can see a collection of movies.", () => {
    cy.get(".movie-container")
      .get("#436270")
      .find("img")
      .get("#724495")
      .find("img")
      .get("#1013860")
      .find("img");
  });

  it("As a user, I should see an indication when the page is loading", () => {
    cy.get("h2").contains("Loading...");
  });
});

describe("Failed Main Page Fetch", () => {
  it("As a user, I should see an error when failing to fetch all movie data.", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 404,
      }
    );
    cy.visit("http://localhost:3000");
    cy.contains('There has been an issue, please try again later');
  })
});
