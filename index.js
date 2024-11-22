document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('./src/audios/chill.mp3');
    const button = document.querySelector('.nav-button');

    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
