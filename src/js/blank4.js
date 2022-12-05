(() => {
  const readMoreButtonArr = document.querySelectorAll('.cards-field__text_accent-color');
  const readMoreTextArr = document.querySelectorAll('.cards-field__text_read-more');
    
    readMoreButtonArr.forEach((readMoreButton, index) => readMoreButton.addEventListener('click', () => {
        readMoreButton.classList.toggle('is-open');
        if (readMoreButton.classList.contains('is-open')) {
            readMoreButton.textContent = 'Hide';
        } else {
            readMoreButton.textContent = 'Read More';
        }
        readMoreTextArr[index].classList.toggle('is-open');
    }));
})();