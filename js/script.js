window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // created tab

    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i<tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        };
    };
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        };
    };

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                };
            };
        };
    });

    // created a timer

    let deadLine = '2024-06-13'; 

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    function setClock (id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero (num) {
                if (num <=9 ) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                
            };
        };
    };

    setClock('timer', deadLine);

     // created a modal window

    let btnMore = document.querySelector('.more');
    let modalWindow = document.querySelector('.overlay');
    let btnClose = document.querySelector('.popup-close');

    btnMore.addEventListener('click', function(){
        modalWindow.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; // запретить прокрутку во время включенного окна
    });

    btnClose.addEventListener('click', function(){
        modalWindow.style.display = 'none';
        btnMore.classList.remove('more-splash');
        document.body.style.overflow = 'visible'; // отключить запрет прокрутки во время включенного окна
    });
    
    // homeWork 1

    // let age = document.getElementById('age');
    
    // function showUser(surname, name) {
    //          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    // }
    
    // showUser.apply(age, ["Горький","Максим"]);

    // homeWork 2

    // class Options{
    //     constructor (height, width, bg, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.bg  = bg;
    //         this.fontSize = fontSize;
    //         this.textAlign = textAlign;
    //     }
    //     createDiv() {
    //         let elemdiv = document.createElement('div');
    //         document.body.appendChild(elemdiv);
    //         let parem = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
    //         elemdiv.style.cssText = parem;
    //     }
    // }

    // const item = new Options(300, 350, 'red', 14, 'cenret');
    // item.createDiv();





});