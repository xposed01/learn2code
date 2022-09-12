window.addEventListener('DOMContentLoaded', () => {

  // menu tabs

  const tabContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelector('.tabheader__items'),
        tabItem = document.querySelectorAll('.tabheader__item');
        
  function hideTabContent() {
    tabContent.forEach(item => {
      item.style.display = 'none';
    });
    tabItem.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].style.display = 'block';
    tabItem[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();
  
  tabs.addEventListener('click', (event) => {

    if (event.target.classList.contains('tabheader__item')) {

      tabItem.forEach((item, index) => {
        if (item === event.target) {
          hideTabContent();
          showTabContent(index);
        }
      });

    }
  });
  
  // timer

  const deadline = '2022-12-12';

  function getTimeRemaining(endtime) { 
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor((t / (1000 * 60) % 60)),
          seconds =  Math.floor(t / 1000 % 60);
    
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds');


    updateClock();

    function getZero(num) {
      if (num >= 0&& num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }

    }

    let timeInterval = setInterval(updateClock, 1000);

  }

  setClock('.timer', deadline);
});
