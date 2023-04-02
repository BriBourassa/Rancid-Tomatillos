const getSingleMovie = (id) => {
	return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
		.then(res => {
			if(!res.ok){
				throw new Error('Issue with request: ', res.status);
			}
			return res.json()
		}
  )
}

const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
		.then(res => {
			if(!res.ok && res.status === 500) {
				console.log(res)
				throw new Error("There was a problem loading the movies, please try again later", res.status)
			} else if (!res.ok) {
				throw new Error("There has been an issue, please try again later", res.status)
			}
			return res.json()
		}
	)
}

export { getSingleMovie, getAllMovies }