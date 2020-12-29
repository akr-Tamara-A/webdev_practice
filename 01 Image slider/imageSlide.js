const block = document.querySelector('.wrapper');
const divider = document.querySelector('.divider');
const imageToEval = document.querySelector('.image2');

function slider(e) {
  const pos = e.offsetX;
  imageToEval.style.width = pos + 'px';
}

block.addEventListener('mousemove', slider);