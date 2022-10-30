class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <section id="floating-whatsapp" class="py-0">
    <div class="container-fluid">
        <button
          type="button"
          onclick="show()"
          id="btnID"
          class="back-to-whatsapp"
        >
          <i class="bi-whatsapp"></i>
        </button>
      <div class="row">
        <div class="col-10 col-md-4 col-lg-3 whatsapp-card" id="whatsappShow">
          <div class="card">
            <div class="card-header">
              <div class="chat-icon">
                <i class="bi-chat-dots"></i>
              </div>
              <div class="chat-person">
                <h5>Dixita Sharma</h5>
                <p>Text Us in Whatsapp</p>
              </div>
              <button
                type="button"
                class="btn-close btn-close-white"
                onclick="closeWhatsapp()"
              ></button>
            </div>
            <div class="card-body">
              <p class="text-box">
                <span>Dixita Sharma</span><br />
                Hi, there!<br />
                How can I help you?
              </p>
            </div>
            <div class="card-footer">
              <a
                href="https://api.whatsapp.com/send?phone=61480005454&text=Hello,%20Can%20you%20please%20provide%20me%20more%20information?"
                target="_blank"
                ><button class="btn-all">
                  <i class="bi-whatsapp me-2"></i>Start Chat
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
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
