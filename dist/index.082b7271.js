function headerAdd(e){const a=document.createElement("div");a.innerHTML='   <header class="header">\n  <a class="header__logo-home" href="index.html">\n    <h3 href="./servicios.html" class="header-name">Adri</h3>\n  </a>\n  <nav class="header__container-link">\n    <a class="header__links" href="#portfolio">Portfolio</a>\n    <a class="header__links" href="#servicios">Servicios</a>\n    <a class="header__links" href="#contacto">Contacto</a>\n  </nav>\n  <div id="navMenu">\n      <span></span>\n      <span></span>\n      <span></span>\n  </div>\n  <div class="header__ventana-burger">\n    <div class="header__ventana-burger-content">\n      <button class="ventana__close">\n        <img class="img-close" src="./medias/header/close.png" alt="cerrar" />\n      </button>\n      <div class="header__ventana-links">\n      <a class="link" href="#portfolio">Portfolio</a>\n      <a class="link" href="#servicios">Servicios</a>\n      <a class="link" href="#contacto">Contacto</a>\n      </div>\n    </div>\n  </div>\n</header>';var n={estado:!1};const s=a.querySelector("#navMenu");a.querySelectorAll(".link").forEach((e=>{e.addEventListener("click",(()=>{t.style.display=""}))}));const r=a.querySelector(".ventana__close"),t=a.querySelector(".header__ventana-burger");s.addEventListener("click",(()=>{s.classList.add("active"),t.style.display="",n.estado,console.log("entraaca",n)})),s.getAttribute(!1)&&(s.addEventListener("click",(()=>{s.classList.remove("active"),t.style.display="",n.estado=!1})),console.log("entraa2aasdad",n)),r.addEventListener("click",(()=>{t.style.display=""})),e.appendChild(a)}
//# sourceMappingURL=index.082b7271.js.map
