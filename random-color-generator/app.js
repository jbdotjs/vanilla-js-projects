
hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'] ;


window.onload = function() {
    let btn = document.getElementById("btn");
    let color = document.querySelector('#color');

    function changeColor(){
        randomHex = generateHex();
        document.body.style.background = randomHex;
        color.textContent = randomHex;
    }

    function generateHex(){
        let hexNumber='#';
        
        for(let i=0;i<6;i++){
            hexNumber += hex[getRandomNumber()];
        }
        
        return hexNumber;
    }  

    function getRandomNumber(){
        return Math.floor(Math.random() * hex.length);
    }

    function checkInputHex(){
        console.log(colorInput.innerText.length);
    }

    btn.addEventListener('click', changeColor);

}
