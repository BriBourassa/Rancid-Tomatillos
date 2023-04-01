describe('network errors', () => {
  beforeEach(() => {
    // cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
    //   // forceNetworkError: true,
    //   statusCode: 500,
    //   body: {type: 'default', url: '', redirected: false, status: 500, ok: false}
    // })
    // .visit('http://localhost:3000/')
  });

  it('As a user, when I load the application, I can see the error message', () => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      // forceNetworkError: true,
      statusCode: 500,
      body: {type: 'default', url: '', redirected: false, status: 500, ok: false}
    })
    .visit('http://localhost:3000/')
    cy.contains('h2', "There was a problem loading the movies, please try again later")
  })
})