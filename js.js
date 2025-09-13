/* Это объявление переменной, мы наши кнопку по тегу */
    const openPopupBtn = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const gifImage = document.getElementById('gifImage');

    openPopupBtn.addEventListener('click', () => {
        gifImage.src = './cool-fun.gif'; // Замените на реальный URL гифки
        popup.style.display = 'block';
    });

    function closePopup() {
        popup.style.display = 'none';
    }