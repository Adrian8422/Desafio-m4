function formAdd(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="form">
  <h3 class="form__title">Escribime</h3>
  <form  class="form__content">
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

// action="https://formsubmit.co/manbassman1996@gmail.com" method="POST"
function enviarForm() {
  const api_base_url = "http://localhost:3003";
  const formEl = document.querySelector(".form__content");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target;
    const formName = target.nombre.value;
    const formEmail = target.email.value;
    const formMensaje = target.mensaje.value;
    console.log("datossss", formName, formEmail, formMensaje);
    fetch(api_base_url + "/email", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        emailUser: "manbassman1996@gmail.com",
        emailFrom: formEmail,
        name: formName,
        message: formMensaje,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("datatatata", data);
      });
    formEl.reset();
    setTimeout(() => {
      alert("mensaje enviado 😉 ");
    }, 250);
  });
}
