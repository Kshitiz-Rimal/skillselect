let x = document.querySelectorAll(".items");

window.onscroll = function () {
  changeColor();
  // scrollFunction();
};
function changeColor() {
  document.getElementById("navbar").style.backgroundColor = "#006E9D";
  document.getElementById("colorswitch").src = "./img/logo_whiteBG.png";
  if (window.scrollY == 0) {
    changeColorto();
  } else {
    for (let i = 0; i <= x.length; i++) {
      x[i].style.color = "#fff";
    }
  }
}
function changeColorto() {
  document.getElementById("navbar").style.backgroundColor = "";
  document.getElementById("colorswitch").src = "./img/Logo.png";
  for (let i = 0; i <= x.length; i++) {
    x[i].style.color = "#000";
  }
}
