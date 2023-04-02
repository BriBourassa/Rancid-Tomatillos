describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 201,
      fixture: "movies.json"
    })
    .visit('http://localhost:3000/')
  });

  // it('Should show the rating when the user hovers on a mini movie', () => {
  //   cy.get("#982620").trigger('onMouseEnter')
  //   .get(".rating-display").should('be.visible')
  // })

  it('Should show the rating when the user hovers on a mini movie', () => {
    cy.get("#1013860").onMouseEnter()
    // .contains('h3', 'Rating:')
  })

  it('Should show the rating when the user hovers on a different mini movie', () => {
    cy.get("#897192").onMouseEnter()
    // .contains('h2', '9.0')
  })


});