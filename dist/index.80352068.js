function headerAdd(e){const a=document.createElement("div");a.innerHTML='   <header class="header">\n  <a class="header__logo-home" href="index.html">\n    <h3 href="./servicios.html" class="header-name">Adri</h3>\n  </a>\n  <nav class="header__container-link">\n    <a class="header__links" href="#portfolio">Portfolio</a>\n    <a class="header__links" href="#servicios">Servicios</a>\n    <a class="header__links" href="#contacto">Contacto</a>\n  </nav>\n  <div id="navMenu">\n      <span></span>\n      <span></span>\n      <span></span>\n  </div>\n  <div class="header__ventana-burger">\n    <div class="header__ventana-burger-content">\n      <button class="ventana__close">\n        <img class="img-close" src="./medias/header/close.png" alt="cerrar" />\n      </button>\n      <div class="header__ventana-links">\n      <a class="link" href="#portfolio">Portfolio</a>\n      <a class="link" href="#servicios">Servicios</a>\n      <a class="link" href="#contacto">Contacto</a>\n      </div>\n    </div>\n  </div>\n</header>';var s="hola";const t={data:{headerActive:!1},listeners:[],getState(){return this.data},setActiveHeader(e){const a=this.getState();a.headerActive=e,this.setState(a)},desactiveHeader(e){const a=this.getState();a.headerActive=e,this.setState(a)},setState(e){this.data=e;for(const e of this.listeners)e();console.log("el state cambio",e)},subscribe(e){this.listeners.push(e)}},n=t.getState();console.log("header",n);const i=a.querySelector("#navMenu");a.querySelectorAll(".link").forEach((e=>{e.addEventListener("click",(()=>{c.style.display=""}))}));const r=a.querySelector(".ventana__close"),c=a.querySelector(".header__ventana-burger");0==n.headerActive&&i.addEventListener("click",(()=>{t.setActiveHeader(!0),i.classList.add("active"),c.style.display=""})),0==!n.headerActive&&i.addEventListener("click",(()=>{i.classList.remove("active"),console.log("salida",s),t.desactiveHeader(!1),c.style.display="",s="hola"})),console.log("header",n),r.addEventListener("click",(()=>{c.style.display=""})),e.appendChild(a)}
//# sourceMappingURL=index.80352068.js.map
