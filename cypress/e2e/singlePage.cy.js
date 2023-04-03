describe('Single Movie Page Fetch', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.loadSingleMovie();
      });
    
it('As a user, when I click on a movie, I am shown additional details about that movie.', () => {
    cy.intercept(
        'GET',
        'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 201,
      fixture: 'singleMovie.json'
    });
      cy.visit('http://localhost:3000');
      cy.get('.movie-container')
      cy.get('#436270').click()

      cy.contains('p', "The world needed a hero. It got Black Adam.")
    });

  it('As a user, I should see an error when an incorrect URL is typed', () => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404,
      fixture: "movies.json"
    })
    cy.visit('http://localhost:3000/banana');
    cy.wrap('.err-container')
    cy.contains('h2', "There has been an issue, please try again later") 
  })
})

