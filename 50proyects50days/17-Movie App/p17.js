//Sorry, but in that case i feel to need to almost copy paste all the code of the original. Cause i haven't a account at the page of the data base and i will reuse the api of the original
//A little disclaimer: If you haven't an account, the web doesn't give you the documentation that explain how to use the api
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const movies = document.querySelector('.movies')
const search = document.querySelector('#search')


getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}
function showMovies(moviesdata) {
    movies.innerHTML = ""

    moviesdata.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" class="back-image">
            <div class="info">
                <h2 class="title">${title}</h2>
                <span class="valoration ${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>    
            </div>
            <div class="sinopsis">
                <h3>Overview</h3>
                <span class="content">${overview}</span>
            </div>
        `
        movies.appendChild(movieEl)
    });
}

function getClassByRate(vote){
    if(vote >=8){
        return 'green'
    }else if(vote >=5){
        return 'orange'
    }else {
        return'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})