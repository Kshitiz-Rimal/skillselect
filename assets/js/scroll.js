window.onscroll = function () {
  changeColor();
  scrollFunction();
};
function changeColor() {
  document.getElementById("navbar").style.backgroundColor = "#006E9D";
  // document.getElementById("navbar").style.color = "#fff";
  if (window.scrollY == 0) {
    changeColorto();
  }
}
function changeColorto() {
  document.getElementById("navbar").style.backgroundColor = "";
}
