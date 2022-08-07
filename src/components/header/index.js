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
  <div id="header__ventana-burger" >
    <div class="header__ventana-burger-content">
      <div class="header__ventana-links">
      <a class="link" href="#portfolio">Portfolio</a>
      <a class="link" href="#servicios">Servicios</a>
      <a class="link" href="#contacto">Contacto</a>
      </div>
    </div>
  </div>
</header>`;

  var stateButton = "hola";
  const state = {
    data: {
      headerActive: false,
    },
    listeners: [],

    getState() {
      return this.data;
    },
    setActiveHeader() {
      const cs = this.getState();
      cs.headerActive = true;
      this.setState(cs);
    },
    desactiveHeader() {
      const cs = this.getState();
      cs.headerActive = false;
      this.setState(cs);
    },
    setState(newDate) {
      this.data = newDate;
      for (const cb of this.listeners) {
        cb();
      }
      console.log("el state cambio", newDate);
    },
    subscribe(callback) {
      this.listeners.push(callback);
    },
  };
  const cs = state.getState();

  console.log("header", cs);

  const buttonOpenEl = componentEl.querySelector("#navMenu");
  const buttonsWindow = componentEl.querySelectorAll(".link");

  buttonsWindow.forEach((button) => {
    button.addEventListener("click", () => {
      ventanaEl.classList.remove("active");
      buttonOpenEl.classList.remove("active");
      ventanaEl.style.display = "";
    });
  });

  const ventanaEl = componentEl.querySelector("#header__ventana-burger");

  buttonOpenEl.addEventListener("click", () => {
    // buttonOpenEl.setAttribute("value", "true");
    if (cs.headerActive == false) {
      state.setActiveHeader();
      ventanaEl.classList.add("active");
      buttonOpenEl.classList.add("active");
    } else if (!cs.headerActive == false) {
      state.desactiveHeader();
      buttonOpenEl.classList.remove("active");
      ventanaEl.classList.remove("active");
      ventanaEl.style.display = "";
    }
  });

  el.appendChild(componentEl);
}
