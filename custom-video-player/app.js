const player = document.querySelector('.player');

const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value; // because their name (in markup) is same as the property
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


/* keyboard shortcuts */

function shortcutSkip(direction) {
    if (direction == 'forward') {
        video.currentTime += 3;
    }
    if (direction == 'backwards') {
        video.currentTime -= 3;
    }
}

const volumeRange = document.querySelector('.player__slider[name="volume"]');

function shortcutRangeHandler(direction) {
    if (video.volume <= 0.9 && direction === 'up') {
        video.volume += 0.05;
        volumeRange.setAttribute('value', video.volume);
    }

    if (video.volume >= 0.05 && direction == 'down') {
        video.volume -= 0.05;
        volumeRange.setAttribute('value', video.volume);
    }
}



document.body.addEventListener('keydown', (e) => {
    const code = e.keyCode;

    code == 32 ? togglePlay() && updateButton()
        : code == 39 ? shortcutSkip('forwards')
            : code == 37 ? shortcutSkip('backwards')
                : code === 38 ? shortcutRangeHandler('up')
                    : code === 40 ? shortcutRangeHandler('down')
                        : null;
});

video.fullscreen = true;
