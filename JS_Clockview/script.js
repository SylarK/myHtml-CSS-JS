setInterval(setClock, 10000) 

    const theHour = document.querySelectorAll('[data-hand-hour]');
    const theMinute = document.querySelectorAll('[data-hand-minute]');
    const theSecond = document.querySelectorAll('[data-hand-second]');


    function setClock() {

        const currentDate = new Date();
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

        setRotation(theSecond, secondsRatio);
        setRotation(theMinute, minutesRatio);
        setRotation(theHour, hoursRatio);
        
        
    }

    function setRotation(element, rotationRatio) {

        //element.style.setProperty('--rotation', rotationRatio * 360)
        element.style.setProperty('--rotation', rotationRatio * 360)
    }

setClock();