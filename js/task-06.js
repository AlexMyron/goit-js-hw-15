(() => {
  const inputEl = document.getElementById('validation-input');
  const validAmount = Number(inputEl.dataset.length);

  inputEl.addEventListener('blur', handleInput);

  function handleInput({ target: { value: inputValue, classList } }) {
    const className = inputValue.length === validAmount ? 'valid' : 'invalid';

    classList.contains('valid') && classList.remove('valid');
    classList.contains('invalid') && classList.remove('invalid');
    classList.add(className);
  }
})();
