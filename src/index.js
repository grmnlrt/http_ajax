const button = document.querySelector('#click-me');

if (button) {
  button.addEventListener('click', (event) => {
    event.currentTarget.innerText = "Hold still...";
  })
}

// ---- GET
const results = document.querySelector("#results");
const form = document.querySelector('#search-movies');

const insertMovies = (data) => {
  results.innerHTML = "";
  data.Search.forEach((movie) => {
    results.insertAdjacentHTML('beforeend',
    `
      <li class="list-inline-item">
      <img src="${movie.Poster}"/>
        <p>${movie.Title}</p>
      </li>
    `);
  });
}

const searchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?apikey=adf1f2d7&s=${keyword}`;
  fetch(url)
    .then(response => response.json())
    .then(insertMovies);
}

searchMovies("Harry Potter")

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const keyword = document.querySelector('#keyword').value;
  searchMovies(keyword);
})




// ------ POST

const places = document.querySelector('#search_places');

places.addEventListener('keyup', (event) => {
  const query = event.currentTarget.value;

  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: 'POST',
    body: JSON.stringify({ query: query })
  }).then(response => response.json())
    .then((data) => {
      console.log(data);
    })
});









