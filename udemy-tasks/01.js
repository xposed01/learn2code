'use strict';

let numberOfFilms = 0;

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function start() {
  while (personalMovieDB.count == '' || !personalMovieDB.count || isNaN(personalMovieDB.count)) {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
  }
}

//start();

function rememberFilms() {
  let i = 0;
  while (i < 1) {
    let lastWatchedFilm = prompt('Ваш последний просмотренный фильм?');
    if (lastWatchedFilm == ' ') {
      alert('Введите название фильма');
    }
    if (lastWatchedFilm.length > 50) {
        alert('Название фильма должно быть короче 50 символов.');
      } else {
      let lastWatchedFilmScore = prompt('Поставьте оценку этому фильму');
      if (lastWatchedFilm && lastWatchedFilmScore) {
        personalMovieDB.movies[lastWatchedFilm] = lastWatchedFilmScore;
        i++;
      }
    }
  }
}

//rememberFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  }
  if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
  }
  if (personalMovieDB.count > 30) {
    alert('Вы киноман');
  }
}

//detectPersonalLevel();

function showMyDB() {
  if(!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
  }
}

writeYourGenres()
console.log(personalMovieDB.genres)