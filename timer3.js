let myCounter;

//button
const button = document.getElementById('btn');
button.addEventListener('click', timer);

function timer() {
  clearInterval(myCounter); //to stop counter if already counting.
  let seconds = parseInt(document.getElementById('min').value);
  myCounter = setInterval(() => {
    if (seconds <= 0) {
      console.log('completed');
      clearInterval(myCounter);

    } else {
      console.log(seconds--);
      console.log('still going');
      let time = document.getElementById('time');
      time.innerHTML = seconds;
    }

  }, 1000);
};