window.onscroll = function () {
  changeColor();
  scrollFunction();
};
function changeColor() {
  document.getElementById("navbar").style.backgroundColor = "#2FBAF7";
  // document.getElementById("navbar").style.color = "#fff";
  if (window.scrollY == 0) {
    changeColorto();
  }
}
function changeColorto() {
  document.getElementById("navbar").style.backgroundColor = "";
}
