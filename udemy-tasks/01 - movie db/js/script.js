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

document.querySelectorAll('.promo__interactive-item').forEach((element, index) => {
    element.innerHTML = `
    ${index+1}) ${movieDB.movies[index]}
    <div class="delete"></div>`;
});

