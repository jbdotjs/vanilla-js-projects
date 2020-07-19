let countValue = 0;
let countElement= document.getElementById('count');
let btns=document.querySelectorAll('.btn');

 
btns.forEach((element) => {
    element.addEventListener('click',(e)=>{
        let btnClassesArr = e.currentTarget.classList;
        
        if(btnClassesArr.contains('increase')){
            countValue++;
        }
        else if(btnClassesArr.contains('decrease')){
            countValue--;
        }
        else if(btnClassesArr.contains('reset')){
            countValue=0;
        }
        
        if(countValue>0){
            countElement.style.color = 'lightgreen';
        }
        else if(countValue<0){
            countElement.style.color = 'red';
        }
        else{
            countElement.style.color = 'white';
        }

        countElement.innerText = countValue;
    });    
});
