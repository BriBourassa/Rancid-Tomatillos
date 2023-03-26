
const getData = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(res => {
            if(!res.ok){
            throw new Error('Issue with request: ', res.status);
            }
            return res.json()}
    )
}

export default getData