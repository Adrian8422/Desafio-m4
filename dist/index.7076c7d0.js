function formAdd(e){const n=document.createElement("div");n.innerHTML='\n  <section class="form">\n  <h3 class="form__title">Escribime</h3>\n  <form  class="form__content">\n   <div class="form__content-label">\n     <label for="name"><h3 class="form__title-label" >Nombre</h2></label>\n     <input class="form__content-input" name="nombre" type="text">\n   </div>\n   <div class="form__label">\n     <label for="email"><h3 class="form__title-label">Email</h3></label>\n     <input class="form__content-input" name="email" type="email">\n   </div>\n   <div class="form__label">\n     <label for="mensaje"><h3 class="form__title-label">Mensaje</h3>\n     <textarea name="mensaje"  class="textarea"  id="mensaje"></textarea>\n    </div>\n    <div class="form__content-button-container">\n      <button class="form__content-label-button-enviar">Enviar</button>\n    </div>\n   </form>\n  </section>',e.appendChild(n)}function enviarForm(){const e=document.querySelector(".form__content");e.addEventListener("submit",(n=>{n.preventDefault();const t=n.target,a=t.nombre.value,l=t.email.value,o=t.mensaje.value;console.log("datossss",a,l,o),fetch("https://current-desafio-m-7.herokuapp.com/email",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({emailUser:"manbassman1996@gmail.com",emailFrom:l,name:`Email:${l} `,message:`Mensaje del remitente: ${o}`})}).then((e=>e.json())).then((e=>{console.log("datatatata",e)})),e.reset(),setTimeout((()=>{alert("mensaje enviado 😉 ")}),250)}))}
//# sourceMappingURL=index.7076c7d0.js.map
