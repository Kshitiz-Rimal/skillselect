class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="above_footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="Services">
                <label>Our Services</label><br />
                <a href="#" class="bi-chevron-right">CDR Report Writing</a><br /><br />
                <a href="#" class="bi-chevron-right">Career Episode Writing</a><br /><br />
                <a href="#" class="bi-chevron-right">Summary Statement</a><br /><br />
                <a href="#" class="bi-chevron-right">ACS RPL Report Writing</a><br /><br />
                <a href="#" class="bi-chevron-right">KAO2 Knowledge assessment</a><br /><br />
                <a href="#" class="bi-chevron-right">CDR Report Review Services</a><br /><br />
              </div>
            </div>
          

            <div class="col-lg-4">
              <div class="Blogs">
                <label>Our Blogs</label><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor, sit amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit, amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a><br /><br />
              </div>
            </div>

             <div class="col-lg-5">
              <div class="Blogs">
                <label>Our Blogs</label><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor, sit amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit, amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a><br /><br />
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a><br /><br />
              </div>
            </div>

          </div>
        </div>
      </section>

      


      <footer>
        <p>Copyrights 2022 ©All Rights Reserved - Skill Select Australia</p>
      </footer>
    `;
  }
}
customElements.define("my-footer", MyFooter);

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     document.getElementById("goToTop").style.visibility = "visible";
//     document.getElementById("goToTop").style.opacity = "1";
//   } else {
//     document.getElementById("goToTop").style.visibility = "hidden";
//     document.getElementById("goToTop").style.opacity = "0";
//   }
// }
// function topFunction() {
//   (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
// }
