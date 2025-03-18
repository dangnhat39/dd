const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const result = document.getElementById('result');
const status = document.getElementById('status');
const taiButton = document.getElementById('tai');
const xiuButton = document.getElementById('xiu');

const diceImages = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png'
];

function rollDice() {
    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);
    const roll3 = Math.floor(Math.random() * 6);

    dice1.src = diceImages[roll1];
    dice2.src = diceImages[roll2];
    dice3.src = diceImages[roll3];

    return roll1 + roll2 + roll3 + 3; // +3 vì index bắt đầu từ 0
}

taiButton.addEventListener('click', () => {
    const total = rollDice();
    result.textContent = `Tổng: ${total}`;
    status.textContent = total >= 11 ? 'Bạn thắng!' : 'Bạn thua!';
});

xiuButton.addEventListener('click', () => {
    const total = rollDice();
    result.textContent = `Tổng: ${total}`;
    status.textContent = total <= 10 ? 'Bạn thắng!' : 'Bạn thua!';
});