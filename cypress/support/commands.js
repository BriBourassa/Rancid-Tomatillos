Cypress.Commands.add('loadPage', () => {
    cy.intercept(
        'GET', 
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
        fixture: "movies.json"
        }
    )
});

Cypress.Commands.add('loadSingleMovie', () => {
    cy.intercept(
        'GET', 
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
        fixture: "singleMovie.json"
    })
});

Cypress.Commands.add('onMouseEnter', () => { 
  cy.get(".rating-display").should('be.visible')
 })