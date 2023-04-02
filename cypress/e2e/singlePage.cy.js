describe('Single Movie Page Fetch', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.loadSingleMovie();
      });
    


it('As a user, when I click on a movie, I am shown additional details about that movie.', () => {
    cy.intercept(
        'GET',
        'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 201
    });
      cy.visit('http://localhost:3000');
      cy.get('.movie-container')
      .get('#436270').click()
      .get('.movie-details')
      .contains("🍅 Black Adam 🍅")
    });




// cy.fixture("singleMovie.json")
// .then(movie => {
//   cy.intercept('GET',"https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", movie)
// })

//   cy.get('.movie-container')
//   .get('#436270').click()
//   .get('.movie-details')
//   .contains("🍅 Black Adam 🍅")
// })



// new describe for failed fetched sad path
// intercept: Get API link, give status code 404, cy.visit loval host, cy.contains('whatever error message is)

  it('As a user, I should see an error when an incorrect URL is typed', () => {
// use an intercept with a status code 404
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
      statusCode: 404,
      fixture: "movies.json"
    })
    cy.get('.movie-container')
      .get('#4360').click()
      .contains()
  })
})

