window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
  }    

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');        
    }
  }
  info.addEventListener('click', function(event) {
      let target = event.target;
      if (target && target.classList.contains('info-header-tab')) {
          for(let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
              hideTabContent(0);
              showTabContent(i);
              break;
            }
          }
      }
  });

   //Timer

  //Создаем переменную deadline и присваиваем значение конечного времени
  let deadline = '2021-06-28';

  //Создаем функцию и называем ее getTimeRemaning и аргумент назвем edtime
  function getTimeRemaining(endtime) {
  // Создаем переменную let обект Date и метод parse 
  // (new Date) - получаем теперешнюю дату и от нее отнимаем дату дедлайна
  // в переменной t сейчас количество милисикунд к дате дедлайна
    let t = Date.parse(endtime) - Date.parse(new Date()),
    // Получаем секунды, округляем милисекунды (Math.floor) 
    // чтобы получить из милисекуд секунды нужно поделить на 1000
    // берем остаток от деления с помощью % и 60 потому что минута имеет 60 секунд и так далее...
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));
    // Если нужны часы в 24 формате и дни то раскоментировать 2 следущие строчки:
    // hours = Math.floor((t/1000/60/60) % 24),
    // days = Math.floor((t/(1000*60*60*24)));
    // для того чтобы експортировать переменные для того чтобы можно было их использовать
    return {
    'total' : t,
    'hours' : hours,
    'minutes' : minutes,
    'seconds' : seconds
    };
  }
  // Передаем значения в DOOM для динамичной работы
   function setClock(id, endtime){
  // Получаем значения индетефикатора со страницы и класы.
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
  // Запускаем каждую секунду
      timeInterval = setInterval (updateClock, 1000);
    
  //Функция будет обновлятся каждую секунду
    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = ('0' + t.hours).slice(-2);
      minutes.textContent = ('0' + t.minutes).slice(-2);
      seconds.textContent = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
   }
   setClock('timer', deadline);
});