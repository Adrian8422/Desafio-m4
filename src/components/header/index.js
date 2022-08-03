function headerAdd(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `   <header class="header">
  <a class="header__logo-home" href="index.html">
    <h3 href="./servicios.html" class="header-name">Adri</h3>
  </a>
  <nav class="header__container-link">
    <a class="header__links" href="#portfolio">Portfolio</a>
    <a class="header__links" href="#servicios">Servicios</a>
    <a class="header__links" href="#contacto">Contacto</a>
  </nav>
  <div id="navMenu">
      <span></span>
      <span></span>
      <span></span>
  </div>
  <div class="header__ventana-burger">
    <div class="header__ventana-burger-content">
      <button class="ventana__close">
        <img class="img-close" src="./medias/header/close.png" alt="cerrar" />
      </button>
      <div class="header__ventana-links">
      <a class="link" href="#portfolio">Portfolio</a>
      <a class="link" href="#servicios">Servicios</a>
      <a class="link" href="#contacto">Contacto</a>
      </div>
    </div>
  </div>
</header>`;

  var stateButton = false;
  const buttonOpenEl = componentEl.querySelector("#navMenu");
  const buttonsWindow = componentEl.querySelectorAll(".link");
  buttonsWindow.forEach((button) => {
    button.addEventListener("click", () => {
      ventanaEl.style.display = "";
    });
  });
  const buttonCloseEl = componentEl.querySelector(".ventana__close");
  const ventanaEl = componentEl.querySelector(".header__ventana-burger");
  if (stateButton == false) {
    buttonOpenEl.addEventListener("click", () => {
      buttonOpenEl.classList.add("active");
      ventanaEl.style.display = "contents";
      stateButton == true;
    });
  }
  if (stateButton == true) {
    console.log("entraaca");
    buttonOpenEl.addEventListener("click", () => {
      buttonOpenEl.classList.remove("active");
      ventanaEl.style.display = "";
      stateButton = false;
    });
  }
  buttonCloseEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });

  el.appendChild(componentEl);
}
