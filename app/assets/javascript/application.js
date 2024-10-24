document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  const result = document.getElementById('result');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const value = e.target.innerText;
      if (value === 'C') {
        result.value = '';
      } else if (value === '=') {
        result.value = eval(result.value);
      } else {
        result.value += value;
      }
    });
  });
});
