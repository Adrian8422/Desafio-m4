function headerAdd(e){const a=document.createElement("div");a.innerHTML='   <header class="header">\n  <a class="header__logo-home" href="index.html">\n    <h3 href="./servicios.html" class="header-name">Adri</h3>\n  </a>\n  <nav class="header__container-link">\n    <a class="header__links" href="#portfolio">Portfolio</a>\n    <a class="header__links" href="#servicios">Servicios</a>\n    <a class="header__links" href="#contacto">Contacto</a>\n  </nav>\n  <div value=false id="navMenu">\n      <span></span>\n      <span></span>\n      <span></span>\n  </div>\n  <div class="header__ventana-burger">\n    <div class="header__ventana-burger-content">\n      <button class="ventana__close">\n        <img class="img-close" src="./medias/header/close.png" alt="cerrar" />\n      </button>\n      <div class="header__ventana-links">\n      <a class="link" href="#portfolio">Portfolio</a>\n      <a class="link" href="#servicios">Servicios</a>\n      <a class="link" href="#contacto">Contacto</a>\n      </div>\n    </div>\n  </div>\n</header>';const n=a.querySelector("#navMenu");a.querySelectorAll(".link").forEach((e=>{e.addEventListener("click",(()=>{l.style.display=""}))}));const s=a.querySelector(".ventana__close"),l=a.querySelector(".header__ventana-burger");n.addEventListener("click",(()=>{console.log("value",n.getAttribute("value")),n.setAttribute("value","true"),n.classList.add("active"),l.style.display="contents"})),console.log("entraaca"),n.addEventListener("click",(()=>{n.classList.remove("active"),l.style.display="",!1})),s.addEventListener("click",(()=>{l.style.display=""})),e.appendChild(a)}
//# sourceMappingURL=index.e2339e19.js.map
