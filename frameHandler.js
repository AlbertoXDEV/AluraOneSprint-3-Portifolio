var toggleFrame = [0,0]

const crptFrameBnt = document.getElementById('c_frame_btn');
crptFrameBnt.addEventListener('click',function () {
  let iframe = document.getElementById('crypto_frame');
  iframe.classList.remove('hidden');
  if (toggleFrame[0]==0) {
    crptFrameBnt.textContent = 'fechar Live Demo';
    toggleFrame[0] = 1;
  } else {
    crptFrameBnt.textContent = 'Live Demo';
    toggleFrame[0] = 0;
    iframe.classList.add('hidden');
  }
});

const hangFrameBnt = document.getElementById('h_frame_btn');
hangFrameBnt.addEventListener('click',function () {
  let iframe = document.getElementById('hangman_frame');
  iframe.classList.remove('hidden');
  if (toggleFrame[1]==0) {
    hangFrameBnt.textContent = 'fechar Live Demo';
    toggleFrame[1] = 1;
  } else {
    hangFrameBnt.textContent = 'Live Demo';
    toggleFrame[1] = 0;
    iframe.classList.add('hidden');
  }
});
