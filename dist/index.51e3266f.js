function headerAdd(e){const a=document.createElement("div");a.innerHTML='   <header class="header">\n  <a class="header__logo-home" href="index.html">\n    <h3 href="./servicios.html" class="header-name">Adri</h3>\n  </a>\n  <nav class="header__container-link">\n    <a class="header__links" href="#portfolio">Portfolio</a>\n    <a class="header__links" href="#servicios">Servicios</a>\n    <a class="header__links" href="#contacto">Contacto</a>\n  </nav>\n  <div id="navMenu">\n      <span></span>\n      <span></span>\n      <span></span>\n  </div>\n  <div class="header__ventana-burger">\n    <div class="header__ventana-burger-content">\n      <button class="ventana__close">\n        <img class="img-close" src="./medias/header/close.png" alt="cerrar" />\n      </button>\n      <div class="header__ventana-links">\n      <a class="link" href="#portfolio">Portfolio</a>\n      <a class="link" href="#servicios">Servicios</a>\n      <a class="link" href="#contacto">Contacto</a>\n      </div>\n    </div>\n  </div>\n</header>';const t={data:{headerActive:!1},listeners:[],getState(){return this.data},setActiveHeader(){const e=this.getState();e.headerActive=!0,this.setState(e)},desactiveHeader(){const e=this.getState();e.headerActive=!1,this.setState(e)},setState(e){this.data=e;for(const e of this.listeners)e();console.log("el state cambio",e)},subscribe(e){this.listeners.push(e)}},n=t.getState();console.log("header",n);const s=!1;a.querySelector(".header__logo-home").addEventListener("click",(()=>{1})),console.log("de pruebaaaa",s);const r=a.querySelector("#navMenu");a.querySelectorAll(".link").forEach((e=>{e.addEventListener("click",(()=>{i.style.display=""}))}));const c=a.querySelector(".ventana__close"),i=a.querySelector(".header__ventana-burger");r.addEventListener("click",(()=>{0==n.headerActive?t.setActiveHeader():0==!n.headerActive&&t.desactiveHeader()})),console.log("header",n),c.addEventListener("click",(()=>{i.style.display=""})),e.appendChild(a)}
//# sourceMappingURL=index.51e3266f.js.map