let x = document.querySelectorAll(".items");

window.onscroll = function () {
  document.getElementById("navbar").style.backgroundColor = "#006E9D";
  document.getElementById("colorswitch").src = "./img/logo_whiteBG.png";

  if (window.scrollY == 0) {
    document.getElementById("navbar").style.backgroundColor = "";
    document.getElementById("colorswitch").src = "./img/Logo.png";
    for (let i = 0; i < x.length; i++) {
      x[i].style.color = "#000";
    }
  } else {
    for (let i = 0; i < x.length; i++) {
      x[i].style.color = "#fff";
    }
  }
};

// whatsapp chatra
const myTimeout = setTimeout(show, 20000);
function show() {
  document.getElementById("whatsappShow").style.cssText = `
  visibility:visible;
  opacity: 1;
  transition:opacity 600ms, visibility 600ms;
`;
}
function closeWhatsapp() {
  document.getElementById("whatsappShow").style.cssText = `
  visibility:hidden;
  opacity: 0;
  transition:opacity 600ms, visibility 600ms;
`;
}
