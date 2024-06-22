function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const validate = () => {
    if (!input.value) {
      result.innerHTML = 'Empty input';
      return;
    }

    const inputValue = Number(input.value);
    if (
      isNaN(inputValue) ||
      !Number.isInteger(inputValue) ||
      Number(inputValue) > 100 ||
      Number(inputValue) < 0
    ) {
      result.innerHTML = 'Invalid';
      return;
    }

    result.innerHTML = 'Valid';
  };

  const clear = () => {
    input.value = '';
    result.innerHTML = '';
  };

  button.addEventListener('click', validate(input.value));

  button2.addEventListener('click', clear);
}

validator();
