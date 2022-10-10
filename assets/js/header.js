class MyHeader extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
      <marquee class="col-sm-12" direction="left" scrollamount="5">We are 24/7 Available Call at +61 480097490</marquee>  
      <header id="header" class="sticky-top">
      <nav class="navbar navbar-expand-lg bg-white">
          <div class="container">
          <div class="order-2 order-lg-1"><a class="bibeklogolink"href="/"><img src="img/cdr-writer-australia-logo.webp" class="bibeklogofix order-sm-1" width="110px" height="70px" alt="cdr writer australia" ></a></div>
            <div class="order-1"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="bi-list"></span>
            </button>
            </div>
            <div class="collapse navbar-collapse order-4 order-lg-2"  id="navbarTogglerDemo02">
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <div class="dropdown">
                <li class="nav-item"><a class="nav-link d-none d-lg-block dropdown-toggle" href="cdr-services" role="button" id="dropdownMenuLink" data-bs-hover="dropdown" aria-expanded="false">Services</a></li>
                  <ul class="dropdown-menu dropdown-large" aria-labelledby="dropdownMenuLink">
                    <li><a class="nav-link" href="cdr-report-writing">CDR Report Writing</a></li>
                    <li><a class="nav-link" href="career-episode-writing">Career Episode Writing</a></li>
                    <li><a class="nav-link" href="summary-statement-engineer-australia">Summary Statement</a></li>
                    <li><a class="nav-link" href="acs-rpl-report">ACS RPL Report Writing</a></li>
                    <li><a class="nav-link" href="ka02-knowledge-assessment">KA02 Knowledge Assessment</a></li>
                    <li><a class="nav-link" href="cdr-report-review-service-australia">CDR Report Review Service in Australia</a></li>
                  </ul>
                </div>
                <div class="d-lg-none nav-link dropdown">
                <a class="mobile-dropdown" href="cdr-services" id="dropdownMenuLink" type="button">Services</a>
                    <a type="button" class="mobile-dropdown dropdown-toggle dropdown-toggle-split" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><a class="nav-link" href="cdr-report-writing">CDR Report Writing</a></li>
                      <li><a class="nav-link" href="career-episode-writing">Career Episode Writing</a></li>
                      <li><a class="nav-link" href="summary-statement-engineer-australia">Summary Statement</a></li>
                      <li><a class="nav-link" href="acs-rpl-report">ACS RPL Report Writing</a></li>
                      <li><a class="nav-link" href="ka02-knowledge-assessment">KA02 Knowledge Assessment</a></li>
                      <li><a class="nav-link" href="cdr-report-review-service-australia">CDR Report Review Service in Australia</a></li>
                    </ul>
                </div>
                <li class="nav-item">
                  <a class="nav-link" href="blog">Blogs</a></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="anzsco-codes">ANZSCO codes</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="pricing">Pricing</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="cdr-report-samples">CDR Samples</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="contact">Contact Us</a>
              </li>
              </ul>
            </div>
            <div class="order-3 order-lg-3"><a href="tel:+61 480097490" target="_blank"><button class="btn-all"><i class="bi-telephone-outbound"></i></button></a></div>
          </div>
        </nav>
      </header>
      `
  }
}
customElements.define('my-header', MyHeader)