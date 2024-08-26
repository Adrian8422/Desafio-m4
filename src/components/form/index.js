function formAdd(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="form-container">
    <h3 class="form__title">Escríbeme</h3>
    <form class="form__content">
      <div class="form__content-label">
        <label for="name"><h3 class="form__title-label">Nombre</h3></label>
        <input class="form__content-input" name="nombre" type="text" required>
      </div>
      <div class="form__content-label">
        <label for="email"><h3 class="form__title-label">Email</h3></label>
        <input class="form__content-input" name="email" type="email" required>
      </div>
      <div class="form__content-label">
        <label for="mensaje"><h3 class="form__title-label">Mensaje</h3></label>
        <textarea name="mensaje" class="textarea" id="mensaje" required></textarea>
      </div>
      <div class="form__content-button-container">
        <button class="form__content-button">Enviar</button>
      </div>
    </form>
  </section>`;

  el.appendChild(componentEl);
}


// action="https://formsubmit.co/manbassman1996@gmail.com" method="POST"
function enviarForm() {
  const api_base_url = "https://portfolio-6357a.web.app";
  const formEl = document.querySelector(".form__content");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target;
    const formName = target.nombre.value;
    const formEmail = target.email.value;
    const formMensaje = target.mensaje.value;

    fetch(api_base_url + "/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        emailUser: "adrian.tag.villegas@gmail.com",
        emailFrom: formEmail,
        name: `Email:${formEmail} `,
        message: `
        Nombre del remitente: ${formName} <||||>
        Mensaje del remitente: ${formMensaje}`,
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
