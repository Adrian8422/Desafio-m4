function formAdd(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="form">
  <h3 class="form__title">Escribime</h3>
  <form action="" class="form__content">
   <div class="form__content-label">
     <label for="name"><h3 class="form__title-label" >Nombre</h2></label>
     <input class="form__content-input" name="nombre" type="text">
   </div>
   <div class="form__label">
     <label for="email"><h3 class="form__title-label">Email</h3></label>
     <input class="form__content-input" name="email" type="email">
   </div>
   <div class="form__label">
     <label for="mensaje"><h3 class="form__title-label">Mensaje</h3>
     <textarea name="mensaje"  class="textarea"  id="mensaje"></textarea>
    </div>
    <div class="form__content-button-container">
      <button class="form__content-label-button-enviar">Enviar</button>
    </div>
   </form>
  </section>`;

  el.appendChild(componentEl);
}

function enviarForm() {
  const formEl = document.querySelector(".form__content");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target as any;
    const formName = target.nombre.value;
    const formEmail = target.email.value;
    const formMensaje = target.mensaje.value;
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "manbassman1996@gmail.com",
        mensaje: `Recibiste msj de:${formName}.

        Email : ${formEmail}.

        Mensaje : ${formMensaje}.
        `,
      }),
    });
    formEl.reset();
    setTimeout(() => {
      alert("mensaje enviado 😉 ");
    }, 250);
  });
}
