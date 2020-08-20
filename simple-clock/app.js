window.addEventListener('load', ()=>{
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');    
    const hourHand = document.querySelector('.hour-hand');

    function setSeconds(second){
        const secondDegree = ((second/60) *360) + 90;
        secondHand.style.transform = `rotate(${secondDegree}deg)`;
    }

    function setMinutes(minute){
        const minuteDegree = ((minute/60) *360) + 90;
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    }

    function setHour(hour){
        const hourDegree = ((hour/12) *360) + 90;
        hourHand.style.transform = `rotate(${hourDegree}deg)`;
        console.log(hour)
    }

    function caller(){
        const now = new Date();
        const second = now.getSeconds();
        const minute = now.getMinutes();
        const hour = now.getHours();
        
        setSeconds(second);
        setMinutes(minute);
        setHour(hour);
    }

    setInterval(caller, 1000);
})
