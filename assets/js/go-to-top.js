window.onscroll = function () {
    changeColor();
  };
    function changeColor() {
      document.getElementById("navbar").style.backgroundColor = "#A1DEFF";
      if (window.scrollY == 0) {
        changeColorto();
      }
    }
    function changeColorto() {
      document.getElementById("navbar").style.backgroundColor = "";
    }




function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? (mybutton.style.display = "block") : (mybutton.style.display = "none");
}
function topFunction() {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
// (mybutton = document.getElementById("goToTop")),
// (window.onscroll = function () {scrollFunction();});