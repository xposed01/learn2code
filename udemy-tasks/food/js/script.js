window.addEventListener('DOMContentLoaded', () => {
  
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
    tabItem[i].classList.add('tabheader__item_active')
  }

  hideTabContent();
  showTabContent();
  
  tabs.addEventListener('click', (event) => {

    if (event.target.classList.contains('tabheader__item')) {

      tabItem.forEach((item, index) => {
        if (item === event.target) {
          hideTabContent();
          showTabContent(index);
        };
      });


    }
  })
  
});