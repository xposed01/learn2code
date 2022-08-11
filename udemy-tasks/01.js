'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');


let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
}
if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert('Вы классический зритель');
}
if (personalMovieDB.count > 30) {
  alert('Вы киноман');
}

let i = 0;
while (i < 2) {
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






console.log(personalMovieDB);