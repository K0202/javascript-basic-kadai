const clickBtn = document.getElementById('btn');

const mainText = document.getElementById('text');

clickBtn.addEventListener('click',  () => {
    setTimeout(() => {
        mainText.textContent = 'ボタンをクリックしました';
    }, 2000);
});