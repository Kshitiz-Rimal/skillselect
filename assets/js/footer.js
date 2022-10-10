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

// (function(d, w, c) {
//     w.ChatraID = '9iRKaD6dErHtazY4s';
//     var s = d.createElement('script');
//     w[c] = w[c] || function() {
//         (w[c].q = w[c].q || []).push(arguments);
//     };
//     s.async = true;
//     s.src = 'https://call.chatra.io/chatra.js';
//     if (d.head) d.head.appendChild(s);
// })(document, window, 'Chatra');

// function scrollFunction() {
//     document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? (mybutton.style.display = "block") : (mybutton.style.display = "none");
// }
// function topFunction() {
//     (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
// }
// (mybutton = document.getElementById("goToTop")),
// (window.onscroll = function () {scrollFunction();});
