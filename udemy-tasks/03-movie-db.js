'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы

document.querySelectorAll('.promo__adv img').forEach(element => {
    element.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

document.querySelector('.promo__genre').textContent = 'ДРАМА';

// 3) Изменить задний фон постера 

document.querySelector('.promo__bg').style.background = 'url("../img/bg.jpg") center center/cover no-repeat';

// 4) Список фильмов на странице сформировать на основании данных JS файла.
// Отсортировать по алфавиту. Добавить нумерацию выведенных фильмов

movieDB.movies.sort();

const filmList = document.getElementsByClassName('promo__interactive-list');

function updateWatchedFilms() {
    filmList[0].innerHTML = '';
    for (let i = 0; i < movieDB.movies.length; i++) {
        filmList[0].innerHTML += `
        <li class="promo__interactive-item">${i+1}) ${movieDB.movies[i]}
        <div class="delete"></div>
        </li>`;
    }
}

updateWatchedFilms();

// 5) После заполнения формы и нажатия кнопки "Подтвердить" - новый фильм добавляется в список.
// 6) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

const submitButton = document.querySelector('.add button');
const filmInput = document.querySelector('.adding__input');

submitButton.addEventListener('click', function (element) {
    element.preventDefault();
    if (filmInput.value.length > 21) {
        movieDB.movies.push(filmInput.value.substr(0, 21) + '...');
    } else {
        movieDB.movies.push(filmInput.value);
    }
    movieDB.movies.sort();
    updateWatchedFilms();
    filmInput.value = '';
})

// 7) При клике на мусорную корзину - элемент будет удаляться из списка


filmList[0].addEventListener('click', (element) => {
    if (element.target.className === 'delete') {
        let filmName = element.target.parentElement.innerText.slice(3);
        let indexMovie = movieDB.movies.indexOf(filmName)
        movieDB.movies.splice(indexMovie, 1)
        updateWatchedFilms();
    }
    
})