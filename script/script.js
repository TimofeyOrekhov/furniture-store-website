document.addEventListener('DOMContentLoaded', function () {
    const filteringButton = document.querySelector('.filtering__button');
    const filteringForm = document.querySelector('.filtering__form');
    const modalButton = document.getElementById('modalButton');
    const modalWindow = document.getElementById('modalWindow');

    // Проверяем, существуют ли элементы на странице
    if (filteringButton && filteringForm) {
        filteringButton.addEventListener('click', function () {
            if (filteringForm.style.display === 'none' || filteringForm.style.display === '') {
                filteringForm.style.display = 'flex';
            } else {
                filteringForm.style.display = 'none';
            }
        });
    }

    if (modalButton && modalWindow) {
        modalButton.addEventListener('click', function () {
            if (modalWindow.style.display === 'none' || modalWindow.style.display === '') {
                modalWindow.style.display = 'block';
            } else {
                modalWindow.style.display = 'none';
            }
        });
    }

});

document.addEventListener('DOMContentLoaded', () => {
    // Находим все блоки с количеством
    const quantityBlocks = document.querySelectorAll('.input-quantity');

    quantityBlocks.forEach(block => {
        const input = block.querySelector('.input-quantity__input');
        const btnUp = block.querySelector('.input-quantity_up');
        const btnDown = block.querySelector('.input-quantity_down');

        // Увеличение значения
        if (btnUp) {
            btnUp.addEventListener('click', () => {
                const currentValue = parseInt(input.value, 10);
                input.value = currentValue + 1;
            });
        }

        // Уменьшение значения
        if (btnDown) {
            btnDown.addEventListener('click', () => {
                const currentValue = parseInt(input.value, 10);
                if (currentValue > 1) {
                    input.value = currentValue - 1;
                }
            });
        }
    });
});
