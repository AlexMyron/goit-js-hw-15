function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

(() => {
  const wrapperEl = document.getElementById('controls');
  const boxesContainerEl = document.getElementById('boxes');
  const inputEl = wrapperEl.querySelector('input[type=number]');
  const createButtonEl = wrapperEl.querySelector('[data-create]');
  const destroyButtonEl = wrapperEl.querySelector('[data-destroy]');
  let inputValue;

  inputEl.addEventListener('input', ({ target: { value } }) => (inputValue = Number(value)));
  createButtonEl.addEventListener('click', () => createBoxes(inputValue));
  destroyButtonEl.addEventListener('click', () => (boxesContainerEl.innerHTML = ''));

  function createBoxes(amount) {
    const boxes = [];
    let boxSize = 30;

    for (let i = 0; i !== amount; i += 1) {
      const boxEl = `<div style="width:${boxSize}px;height:${boxSize}px;background-color:${getRandomHexColor()}"></div>`;
      boxes.push(boxEl);
      boxSize += 10;
    }
    boxesContainerEl.innerHTML = boxes.join('');
  }
})();
