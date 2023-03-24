const display = document.getElementById('result');
const keys = document.querySelectorAll('.keys button');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.value;
    if (keyValue === 'C') {
      display.value = '';
    } else if (keyValue === '=') {
      display.value = eval(display.value);
    } else {
      display.value += keyValue;
    }
  });
});