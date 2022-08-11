'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let lastWatchedFilm = prompt('Ваш последний просмотренный фильм?');
let lastWatchedFilmScore = prompt('Поставьте оценку этому фильму');

let personalMovieDB = {
  count: 1,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[lastWatchedFilm] = lastWatchedFilmScore;

console.log(personalMovieDB);

