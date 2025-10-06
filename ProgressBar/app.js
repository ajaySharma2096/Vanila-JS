// query selectors
const progressInput = document.querySelector('.progress-bar-input');
const progressButton = document.querySelector('.progress-bar-btn');
const progressList = document.querySelector('.progress-bar-list');

// event listeners
progressButton.addEventListener('click', addProgressBar);

// functions
function addProgressBar(event) {
   event.preventDefault();

   const progressDiv = document.createElement('div');
   progressDiv.classList.add('progress-bars');

   const progressBar = document.createElement('div');
   progressBar.classList.add('progress-bar-item');
   const id = crypto.randomUUID()
   progressBar.setAttribute('id', id)
   progressDiv.appendChild(progressBar);

   progressList.appendChild(progressDiv);

   startProgressBar(id, progressInput.value)
   progressInput.value="";
}

function startProgressBar(id, progressBarTime) {
  var progressBar = document.getElementById(id);
  var width = 0;
  const timeInSeconds = progressBarTime*1000;
  const step = 100 / (timeInSeconds / 10);

  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
    //   progressBar.parentElement.remove();  
      clearInterval(id);
    } else {
      width+=step;
      progressBar.style.width = width + '%';
    }
  }
}