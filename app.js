const container = document.querySelector('.container');
const text = document.querySelector('p');

const totalTime = 10000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathing();

function breathing() {
    text.textContent = `Breathe In ${breatheTime/1000} seconds`;
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = `Hold it ${holdTime/1000} seconds`;
        setTimeout(() => {
            text.innerText = `Now breathe it Out`;
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}
setInterval(breathing, totalTime);