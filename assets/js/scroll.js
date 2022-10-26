let x = document.querySelectorAll(".items");

window.onscroll = function () {
  changeColor();
  // scrollFunction();
};
function changeColor() {
  document.getElementById("navbar").style.backgroundColor = "#006E9D";

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

  for (let i = 0; i <= x.length; i++) {
    x[i].style.color = "#000";
  }
}
