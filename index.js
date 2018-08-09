// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

// working version
// var el = document.getElementById('save_lincoln');
// el.addEventListener("click", ()=>saveLincoln(parseInt(document.getElementById('interval').value)));
//
// function saveLincoln(interval) {
//   // debugger;
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }


var button = document.getElementById('save_lincoln');
var image = document.getElementById('foreground');
var interval = parseInt(document.getElementById('interval')).value;

function fadeOutEffect(image, interval) {
  setInterval(function () {
    image.style.opacity -= 0.1;
  }, interval);
}

function saveLincoln(image, interval) {
  // debugger;
  // if(isNaN(interval)) {
  //   interval = 10000
  // }
  fadeOutEffect(image, interval);
}

button.addEventListener("click", ()=>saveLincoln(image, interval));
