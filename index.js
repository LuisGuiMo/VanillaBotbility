document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('./src/audios/tecno1.mp3');
    const button = document.querySelector('.nav-button');

    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
