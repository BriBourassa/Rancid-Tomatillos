describe('network errors', () => {
  beforeEach(() => {
    // cy.visit('http://localhost:3000/')
    // cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
    //   // forceNetworkError: true,
    //   statusCode: 500,
    //   body: {type: 'default', url: '', redirected: false, status: 500, ok: false}
    // })
    // .visit('http://localhost:3000/')
  });

  it('As a user, when I load the application,  and theres an error I can see the error message', () => {
    cy.intercept({
      method: 'GET', 
      url: "https://rancid-tomatillos.herokuapp.com/api/v2/movies/"}, {
      // forceNetworkError: true,
      statusCode: 500,
      body: {
        message: "There was a problem loading the movies, please try again later"
      }
    }).visit('http://localhost:3000/')
    cy.contains('h2', "There was a problem loading the movies, please try again later")
  })

  it('As a user, when I click on a movie,  and theres a network error I can see the error message', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/982620', {
      statusCode: 500,
      body: {
        message: "There has been an issue, please try again later"
      }
    } ).as('getSingleMovie')
    cy.visit('http://localhost:3000/')
    .get('#982620').click()

    cy.url().should('include', '/982620')
    cy.get('.movie-details').should('not.exist')
    cy.contains('h2', "There has been an issue, please try again later")
  })
})