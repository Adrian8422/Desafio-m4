function headerAdd(e){const a=document.createElement("div");a.innerHTML='   <header class="header">\n  <a class="header__logo-home" href="index.html">\n    <h3 href="./servicios.html" class="header-name">Adri</h3>\n  </a>\n  <nav class="header__container-link">\n    <a class="header__links" href="#portfolio">Portfolio</a>\n    <a class="header__links" href="#servicios">Servicios</a>\n    <a class="header__links" href="#contacto">Contacto</a>\n  </nav>\n  <div id="navMenu">\n      <span></span>\n      <span></span>\n      <span></span>\n  </div>\n  <div class="header__ventana-burger">\n    <div class="header__ventana-burger-content">\n      <button class="ventana__close">\n        <img class="img-close" src="./medias/header/close.png" alt="cerrar" />\n      </button>\n      <div class="header__ventana-links">\n      <a class="link" href="#portfolio">Portfolio</a>\n      <a class="link" href="#servicios">Servicios</a>\n      <a class="link" href="#contacto">Contacto</a>\n      </div>\n    </div>\n  </div>\n</header>';var n="hola";const s=a.querySelector("#navMenu");a.querySelectorAll(".link").forEach((e=>{e.addEventListener("click",(()=>{r.style.display=""}))}));const l=a.querySelector(".ventana__close"),r=a.querySelector(".header__ventana-burger");s.addEventListener("click",(()=>{console.log("entraa2aasdad",n),s.classList.add("active"),r.style.display="",n="chau"})),s.addEventListener("click",(()=>{s.classList.remove("active"),console.log("salida",n),r.style.display="",n="hola"})),l.addEventListener("click",(()=>{r.style.display=""})),e.appendChild(a)}
//# sourceMappingURL=index.bdeaa6ba.js.map
