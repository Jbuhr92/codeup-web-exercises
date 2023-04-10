export function displayMovies(movies) {
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
      <h3>${movie.title} (${movie.rating})</h3>
      <p>Genre: ${movie.genre}</p>
      <button class="edit-button" data-id="${movie.id}">Edit</button>
      <button class="delete-button" data-id="${movie.id}">Delete</button>
    `;
        movieList.appendChild(movieDiv);
    });
}

export function addMovie(title, rating, genre) {
    fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, rating, genre })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie added:', data);
            displayMovie();
        })
        .catch(error => {
            console.error('Error adding movie:', error);
        });
}

export function removeMovie(id) {
    fetch(`http://localhost:3000/movies/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie removed:', data);
            displayMovie();
        })
        .catch(error => {
            console.error('Error removing movie:', error);
        });
}

export function updateMovie(id, title, rating, genre) {
    fetch(`http://localhost:3000/movies/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, rating, genre })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie updated:', data);
            displayMovie();
        })
        .catch(error => {
            console.error('Error updating movie:', error);
        });
}

export function displayMovie() {
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => {
            console.log('Movies:', data.movies);
            displayMovies(data.movies);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
}
