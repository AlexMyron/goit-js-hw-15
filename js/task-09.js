function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

(() => {
  const refs = {
    buttonEl: document.querySelector('button.change-color'),
    spanEl: document.querySelector('span.color'),
    bodyEl: document.querySelector('body'),
  };

  refs.buttonEl.addEventListener('click', handleClick);

  function handleClick() {
    const colorValue = getRandomHexColor();

    refs.bodyEl.style.backgroundColor = colorValue;
    refs.spanEl.textContent = colorValue;
  }
})();
