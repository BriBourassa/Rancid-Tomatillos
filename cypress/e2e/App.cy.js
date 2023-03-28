describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Can visit the site', () => {
    cy.visit('http://localhost:3000/')
    .get('h1')
    .contains('🍅 RANCID 🍅 TOMATILLOS 🍅')
  })

  //As a user, when I load the application, I can see a collection of movies.
  //get the movie container
  //get div 
  //contains 'img', 'img path'

  it('As a user, when I load the application, I can see a collection of movies.', () => {
    // cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    //   statusCode: 201,
    //   body: {
    //     id:436270,
    //     poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",    
    //     backdrop_path:"https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    //     title: "Black Adam",
    //     average_rating: 4,
    //     release_date: "2022-10-19"
    //   }
    // })
    cy.visit('http://localhost:3000/')
    .get('.movie-container')
    .get('#436270')
    // .contains('img', 'src="https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"')//how do we check the actual image
  })


  it('As a user, when I click on a movie, they are shown additional details about that movie.', () => {
    // cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    //   statusCode: 201,


    // })
    cy.visit('http://localhost:3000/')
    .get('.movie-container')
    .get('#934641').click()
    .get('.movie-details')
    .contains("🍅 The Minute You Wake Up Dead 🍅")
    
  })

  //
 

})