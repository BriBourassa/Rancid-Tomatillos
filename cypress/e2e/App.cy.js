describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 201,
      fixture: "movies.json"
    })
    .visit('http://localhost:3000/')
  });

  it('As a user, when I load the application, I can see the title', () => {
    cy.get('h1')
    .contains('🍅 RANCID 🍅 TOMATILLOS 🍅')
  })

  it('As a user, when I load the application, I can see a collection of movies.', () => {
    cy.get('.movie-container')
    .get('#436270')
    .find("img")
  })

  it('As a user, when I click on a movie, I am shown additional details about that movie.', () => {
    cy.fixture("singleMovie.json")
    .then(movie => {
      cy.intercept('GET',"https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", movie)
    })
    
    cy.get('.movie-container')
    .get('#436270').click()
    .get('.movie-details')
    .contains("🍅 Black Adam 🍅")
  })

  //test for a not found page, if someone typed an incorrect id into the url
})