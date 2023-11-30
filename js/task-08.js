(() => {
  const formEl = document.querySelector('form.login-form');

  formEl.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const { email, password } = form.elements;
    const [emailValue, passwordValue] = [email.value, password.value];

    if (!emailValue || !passwordValue) {
      alert('All fields has to be filled');
    } else {
      console.log({
        email: emailValue,
        password: passwordValue,
      });
      form.reset();
    }
  }
})();
