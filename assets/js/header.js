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
            <li class="nav-item me-5">
              <a class="nav-link active" aria-current="page" href="index.html"
                >Home</a
              >
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="aboutus.html">About Us</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" href="blog.html">Blog</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" id="contact" href="contactus.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
  }
}
customElements.define("my-header", MyHeader);
