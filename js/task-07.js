(() => {
  const refs = {
    rangeInput: document.getElementById('font-size-control'),
    textEl: document.getElementById('text'),
  };

  refs.rangeInput.addEventListener('change', handleChange);

  function handleChange({ target: { value: currentSize } }) {
    refs.textEl.style.fontSize = `${currentSize}px`;
  }
})();
