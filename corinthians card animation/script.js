const corinthians1 = document.getElementById('corinthians-1');
const corinthians2 = document.getElementById('corinthians-2');

const setaRight = document.getElementById('right');
const setaLeft = document.getElementById('left');

setaLeft.addEventListener('click', () => {
    corinthians1.style.left = '650px';
    corinthians2.style.left = '-50px';
})

setaRight.addEventListener('click', () => {
    corinthians1.style.left = '-50px';
    corinthians2.style.left = '-650px';
})