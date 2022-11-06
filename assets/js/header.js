class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container">
      <a class="navbar-brand" href="./index.html">
      <img src="./img/Logo.png" alt="" id="colorswitch" class="img-fluid" height="33px" width="180px" >
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link items active" id="home-page" aria-current="page" href="./index.html" >Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link items dropdown-toggle " id="service-page" href="./our-services.html" role="button" 
              aria-expanded="false" >
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
            <a class="nav-link items"  id="anzsco-page" href="./anzsco.html" >ANZSCO codes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link items" id="blog-page" href="./blog.html" >Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link items" id="sample-page" href="./cdrsamples.html" >CDR samples</a>
          </li>
          <li class="nav-item">
            <a class="nav-link items" id="pricing-page" href="./pricing.html" >Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link items" id="contact-page" href="./contactus.html" >Contact Us</a>
          </li>
          
          <button class="btn btn-primary" onclick="Chatra('openChat', true)">Chat Us</button>
        
        </ul>
      </div>
    </div>
  </nav>
  </header>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

      `;
  }
}
customElements.define("my-header", MyHeader);

(function (d, w, c) {
  w.ChatraID = "zECfQ5CCWmujfp2rE";
  var s = d.createElement("script");
  w[c] =
    w[c] ||
    function () {
      (w[c].q = w[c].q || []).push(arguments);
    };
  s.async = true;
  s.src = "https://call.chatra.io/chatra.js";
  if (d.head) d.head.appendChild(s);
})(document, window, "Chatra");

$(document).ready(function () {
  document.querySelector(".active").classList.remove("active");

  var path = window.location.pathname;

  if (path == "/" || path == "/skillselect/")
    $("#home-page").addClass("active");
  else if (path == "/index.html" || path == "/skillselect/index.html")
    $("#home-page").addClass("active");
  else if (
    path == "/our-services.html" ||
    path == "/skillselect/our-services.html"
  )
    $("#service-page").addClass("active");
  else if (path == "/anzsco.html" || path == "/skillselect/anzsco.html") {
    $("#anzsco-page").addClass("active");
    // console.log(path);
  } else if (path == "/blog.html" || path == "/skillselect/blog.html")
    $("#blog-page").addClass("active");
  else if (path == "/cdrsamples.html" || path == "/skillselect/cdrsamples.html")
    $("#sample-page").addClass("active");
  else if (path == "/pricing.html" || path == "/skillselect/pricing.html")
    $("#pricing-page").addClass("active");
  else if (path == "/contactus.html" || path == "/skillselect/contactus.html")
    $("#contact-page").addClass("active");
});
