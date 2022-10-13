class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg sticky-top" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LOGO</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./aboutus.html">About Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle d-none d-lg-block" href="#" role="button" aria-expanded="false">
                Services
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">CDR Report Writing</a></li>
                <li><a class="dropdown-item" href="#">Career Episode Writing</a></li>
                <li><a class="dropdown-item" href="#">Summary Statement</a></li>
                <li><a class="dropdown-item" href="#">ACS RPL Report Writing</a></li>
                <li><a class="dropdown-item" href="#">KAO2 Knowledge assessment</a></li>
                <li><a class="dropdown-item" href="#">CDR Report Review Services</a></li>


              </ul>
            </li>
        
        
            
            <li class="nav-item">
              <a class="nav-link" href="./aboutus.html">ANZSCO codes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./blog.html">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./aboutus.html">CDR samples</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="contact" href="./contactus.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}
customElements.define("my-header", MyHeader);
