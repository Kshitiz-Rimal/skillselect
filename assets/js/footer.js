class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="above-footer pt-3">
      <div class="content">
        <div class="Services">
          <label>Our Services</label><br />
          <a href="#" class="bi-chevron-right">CDR Report Writing</a><br /><br />
          <a href="#" class="bi-chevron-right">Career Episode Writing</a><br /><br />
          <a href="#" class="bi-chevron-right">Summary Statement</a><br /><br />
          <a href="#" class="bi-chevron-right">ACS RPL Report Writing</a><br /><br />
          <a href="#" class="bi-chevron-right">KAO2 Knowledge assessment</a><br /><br />
          <a href="#" class="bi-chevron-right">CDR Report Review Services</a><br /><br />
        </div>

        <div class="Blogs">
          <label>Our Blogs</label><br />
          <a href="#" class="bi-chevron-right"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</a
          ><br /><br />
          <a href="#" class="bi-chevron-right"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.</a
          ><br /><br />
          <a href="#" class="bi-chevron-right"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a
          ><br /><br />
          <a href="#" class="bi-chevron-right"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.</a
          ><br /><br />
          <a href="#" class="bi-chevron-right"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.</a
          ><br /><br />
          <a href="#" class="bi-chevron-right"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.</a
          ><br /><br />
        </div>

        <div class="footer-form">
          <label>Leave Us a Message</label><br />

          <form>
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Your Name*"
              required=""
            />
            <br />
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Your Email*"
              required=""
            />
            <br />
            <textarea
              type="message"
              class="form-control"
              name="message"
              rows="3"
              placeholder="Message*"
              required=""
            ></textarea>
            <br />
            <button class="btn-all m-0 mb-3" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section> 
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
