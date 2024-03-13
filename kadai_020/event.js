const clickBtn = document.getElementById('btn');

const mainText = document.getElementById('text');

clickBtn.addEventListener('click', () => {

    mainText.textContent = 'ボタンをクリックしました';
})