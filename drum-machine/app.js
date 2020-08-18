window.addEventListener('load', ()=>{
    
    function playSound(e) {
        const keyPressed = e.keyCode;
        const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
        const key = document.querySelector(`.key[data-key="${keyPressed}"]`);
        if (!audio) return;     // when a key without associated audio is pressed
        audio.currentTime = 0;     // to rewind
        key.classList.add('playing');
        audio.play();
    }
    
    function removeTransition(e) {
         if (e.propertyName !== 'transform') return;
         this.classList.remove('playing');
     }
    
     const keys = document.querySelectorAll('.key');
     keys.forEach( key => {
        key.addEventListener('transitionend', removeTransition)
    });

    window.addEventListener('keydown', playSound);
});


