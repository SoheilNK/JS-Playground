var x;

function cdTimer() {
  // Set the time in minutes
  let t1 = document.getElementById("cdTime").value;

  var oldDate = new Date();
  var countDownDate = new Date(oldDate.getTime() + t1 * 60000 + 2000);
  console.log("goto setInterval");
  var x = setInterval(count, 1000);
  
}


function count() {
      // Get today's date and time
      let now = new Date().getTime();
    console.log(now);
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      let minutes = Math.floor(distance/60000);
      let secondes = Math.floor((distance % 60000) / 1000)
      document.getElementById("timer").innerHTML = minutes + " : " + secondes;
      
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
      }
  }
function cdTimer2() {
  // Set the time in minutes
  let t1 = document.getElementById("cdTime").value;

  var oldDate = new Date();
  var countDownDate = new Date(oldDate.getTime() + t1 * 60000 + 2000);
  console.log("goto setInterval");
  
  do {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  var minutes = Math.floor(distance/60000);
  var secondes = Math.floor((distance % 60000) / 1000)
  document.getElementById("timer").innerHTML = minutes + " : " + secondes;
}
while (distance > 0);
  
}
