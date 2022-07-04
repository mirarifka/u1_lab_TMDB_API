const API_KEY = 'fd19a7c36d0b40e78c8903095a124166'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const searchButton = document.getElementById('search')
const searchInput = document.getElementById('search-input')
let movieList = document.getElementById('img-div')

const renderList = (movies) => {
  for (let i = 0; i < movies.length; i++) {
    let movieTitle = document.createElement('li')
    movieTitle.append(movies[i].original_title)
    let moviePoster = document.createElement('img')
    moviePoster.append(movies[i].poster_path)
    console.log(movieTitle)
    console.log(moviePoster)
    document.body.append(movieTitle)
    document.querySelector('.movie-list').appendChild(moviePoster)
    moviePoster.setAttribute(
      'src',
      `https://api.themoviedb.org/3/search/movie?query=${moviePoster}&api_key=${API_KEY}`
    )
  }
}

searchButton.addEventListener('click', async () => {
  let movieTitle = searchInput.value
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${API_KEY}`
  )
  let movieResults = response.data.results
  renderList(movieResults)
})
