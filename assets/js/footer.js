class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <footer>
            <p>Copyrights 2022 ©All Rights Reserved - Skill Select Australia</p>
         </footer>

         <div class="whatsapp-chatra">
            <a
                href="https://api.whatsapp.com/send?phone=61480097490&amp;text=Hello,%20Can%20you%20please%20provide%20me%20more%20information?"
                class="back-to-whatsapp d-flex align-items-center justify-content-center"
                id="whatsapp"
                target="_blank"
            ><i class="bi-whatsapp"></i
            ></a>
        </div>

        <div class="go-to-top">
        <button
            onclick="topFunction()"
            id="goToTop"
            title="Go to top"
            style="display: block"
        >
        <i
          class="bi-arrow-up d-flex align-items-center justify-content-center"
        ></i>
        </button>
        </div>
        `;

  }
}
customElements.define("my-footer", MyFooter);



function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}

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


