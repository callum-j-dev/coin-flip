const flipper = document.querySelector('#flip-button');
const coinImg = document.querySelector('#coin');
const coinText = document.querySelector('#coin-text');

flipper.addEventListener('click', () => {
    let flip = Math.random();
    console.log(flip);
    if (flip < 0.5) {
        coinImg.src = '/resources/coinTails.jpg';
        coinText.textContent = 'TAILS';
    } else {
        coinImg.src = '/resources/coinHead.jpeg';
        coinText.textContent = 'HEADS';
    }
});