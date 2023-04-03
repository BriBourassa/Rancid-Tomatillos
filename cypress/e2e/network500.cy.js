describe('network errors', () => {

  it('As a user, when I load the application, and theres an error I can see the error message', () => {
    cy.intercept(
      'GET', 
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies", 
      {
        statusCode: 500
      }
    )
    cy.visit('http://localhost:3000')
    cy.contains("There was a problem loading the movies, please try again later")
  })
})