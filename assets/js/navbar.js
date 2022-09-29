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