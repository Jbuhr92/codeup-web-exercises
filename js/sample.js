import { displayMovies, addMovie, removeMovie, updateMovie, displayMovie } from './functions.js';

const movieList = document.getElementById('movie-list');
const addMovieForm = document.getElementById('add-movie-form');

// Add a movie when the form is submitted
addMovieForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(addMovieForm);
    const title = formData.get('title');
    const rating = formData.get('rating');
    const genre = formData.get('genre');
    addMovie(title, rating, genre);
    addMovieForm.reset();
});

// Remove a movie when the delete button is clicked
movieList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-button')) {
        const id = event.target.dataset.id;
        removeMovie(id);
    }
});

// Display the edit form when the edit button is clicked
movieList.addEventListener('click', event => {
    if (event.target.classList.contains('edit-button')) {
        const id = event.target.dataset.id;
        displayEditForm(id);
    }
});

// Function to display the edit form for a movie
function displayEditForm(id) {
    fetch(`http://localhost:3000/movies/${id}`)
        .then(response => response.json())
        .then(data => {
            const movie = data.movie;
            const editMovieForm = document.createElement('form');
            editMovieForm.innerHTML = `
        <h3>Edit Movie</h3>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="${movie.title}">
        <label for="rating">Rating</label>
        <input type="text" name="rating" id="rating" value="${movie.rating}">
        <label for="genre">Genre</label>
        <input type="text" name="genre" id="genre" value="${movie.genre}">
        <button class="submit-edit-button" data-id="${id}">Save</button>
        <button class="cancel-edit-button">Cancel</button>
      `;
            movieList.replaceChild(editMovieForm, event.target.parentNode);
        })
        .catch(error => {
            console.error('Error fetching movie:', error);
        });
}

// Function to update a movie in the database
function submitEditForm(id) {
    const editMovieForm = document.querySelector('form');
    const formData = new FormData(editMovieForm);
    const title = formData.get('title');
    const rating = formData.get('rating');
    const genre = formData.get('genre');
    updateMovie(id, title, rating, genre);
}

// Cancel editing a movie
movieList.addEventListener('click', event => {
    if (event.target.classList.contains('cancel-edit-button')) {
        displayMovie();
    }
});

// Submit the edit form when the save button is clicked
movieList.addEventListener('click', event => {
    if (event.target.classList.contains('submit-edit-button')) {
        const id = event.target.dataset.id;
        submitEditForm(id);
    }
});

// Display the list of movies when the page loads
displayMovie();
