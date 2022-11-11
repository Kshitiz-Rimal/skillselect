class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <section id="above-footer-form">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-42Half px-0">
            <!-- <div class="container-fluid"> -->
            <div class="row" style="height: 50%; background-color: #fff"></div>
            <div class="row" style="height: 50%; background-color: #2d729b"></div>

            <!-- </div> -->
          </div>

          <div class="col-lg-3Half px-0">
            <div class="d-flex justify-content-center align-items-center">
              <div class="card">
                <div class="footer-form">
                  <label>Leave us a Message</label>

                  <form class="text-center">
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required="" />

                    <input type=" email" class="form-control" name="email" placeholder="Your Email" required="" />

                    <textarea type="message" class="form-control" name="message" rows="3" placeholder="Message"
                      required=""></textarea>

                    <button class="btn btn-primary mb-1 text-center" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-42Half px-0">
            <div class="row" style="height: 50%; background-color: #fff"></div>
            <div class="row" style="height: 50%; background-color: #2d729b"></div>
          </div>
        </div>
      </div>
    </section>

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
        <div class="col-10 col-md-4 col-lg-4 whatsapp-card" id="whatsappShow">
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
            
          

            <div class="col-lg-4">
              <div class="about-us">
                <h4>About Us</h4>
                <p class="pe-lg-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In, soluta? consectetur adipisicing elit.</p>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="services">
                <h4>Our Services</h4>
                <a href="./cdrreportwriting.html" class="bi-chevron-right">CDR Report Writing</a>
                <a href="./careerepwriting.html" class="bi-chevron-right">Career Episode Writing</a>
                <a href="./summarystatement.html" class="bi-chevron-right">Summary Statement</a>
                <a href="./acsrplreportwriting.html" class="bi-chevron-right">ACS RPL Report Writing</a>
                <a href="./ka02assessment.html" class="bi-chevron-right">KAO2 Knowledge assessment</a>
                <a href="./cdrreportreview.html" class="bi-chevron-right">CDR Review Services</a>
              </div>
            </div>


            <div class="col-lg-4">
              <div class="blogs">
                <h4>Our Blogs</h4>
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor, sit amet.</a>
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a>
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit, amet.</a>
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a>
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a>
                <a href="#" class="bi-chevron-right">Lorem ipsum dolor sit amet.</a>
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
