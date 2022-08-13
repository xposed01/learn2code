'use strict';

let numberOfFilms = 0;

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    while (personalMovieDB.count == '' || !personalMovieDB.count || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    }
  },

  rememberFilms: function() {
    let i = 0;
    while (i < 1) {
      let lastWatchedFilm = prompt('Ваш последний просмотренный фильм?').trim();
      if (lastWatchedFilm == '') {
        alert('Введите название фильма');
      } else {
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
  },

  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    }
    if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Вы классический зритель');
    }
    if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    }
  },

  showMyDB: function() {
    if(!personalMovieDB.private) {
      console.log(personalMovieDB);
    } else {
      console.log('access denied. db is hidden');
    }
  },

  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let newGenre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
      if (newGenre) {
        personalMovieDB.genres.push(newGenre);
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((value, index) => {
      console.log(`Любимый жанр ${index+1} - это ${value}`);
    });
  },

  toggleVisibleMyDB: function() {
    if (personalMovieDB.private === false) {
      personalMovieDB.private = true;
      console.log('hide db');
    } else {
      personalMovieDB.private = false;
      console.log('open db');
    }
  },

};

personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB()

// personalMovieDB.start();


// personalMovieDB.rememberFilms();


// personalMovieDB.detectPersonalLevel();



personalMovieDB.writeYourGenres();

console.log(personalMovieDB.genres);


