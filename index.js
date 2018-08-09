// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const interval = document.getElementById("interval")
const button = document.getElementById("save_lincoln")
const zombie = document.getElementById("foreground")

function fadeOut(interval) {
  const fadeEffect = setInterval(function () {
    if (!zombie.style.opacity) {
      zombie.style.opacity = 1
      console.log("set opacity of zombie");
    }
    if (zombie.style.opacity > 0) {
      zombie.style.opacity -= 0.1;
      console.log("decrement opacity");
    }
    else {
      clearInterval(fadeEffect);
      console.log("stop fadeout");
    }
  }, interval);
}

function saveLincoln(interval) {
  if(isNaN(interval)) {
      interval = 500
    }
  fadeOut(interval)
  }

 button.addEventListener('click', () => saveLincoln(parseInt(interval)));
