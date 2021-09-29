function addWelcome(params = {}) {
  const container = document.querySelector(".welcome-content");
  const template = document.querySelector("#welcome-template");

  template.content.querySelector(".welcome__title-one").textContent =
    params.title;

  template.content.querySelector(".welcome__title-two").textContent =
    params.subtitulo;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWelcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/skgryj111lli/environments/master/entries?access_token=aTnhAttXnsH4e8xRgQRFUI_CpZr_uN8qa6ts0Ps9p1I&&content_type=addWelcome"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      const item = data.items["0"].fields;
      const params = {
        title: item.titulo,
        subtitulo: item.subtitulo,
      };
      addWelcome(params);
    });
}

function addAboutMe(params = {}) {
  const container = document.querySelector(".presentacion");
  const template = document.querySelector("#presentacion-content");

  template.content.querySelector(".p__container-title").textContent =
    params.title;
  template.content.querySelector(".p__container-text").textContent =
    params.descripcion;
  template.content.querySelector(".presentacion__persona-img").src =
    params.imagen;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getAboutMe() {
  return fetch(
    "https://cdn.contentful.com/spaces/skgryj111lli/environments/master/entries?access_token=aTnhAttXnsH4e8xRgQRFUI_CpZr_uN8qa6ts0Ps9p1I&&content_type=aboutme"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      const item = data.items["0"].fields;
      const imgURL = data.includes.Asset["0"].fields.file.url;

      const params = {
        title: item.titulo,
        descripcion: item.descripcion,
        imagen: imgURL,
      };
      addAboutMe(params);
    });
}

function addMyServices(params = {}) {
  const container = document.querySelector(".services__container");
  const template = document.querySelector("#services-template");

  template.content.querySelector(".ss__cont-img-subtitle").textContent =
    params.title;
  template.content.querySelector(".ss__cont-img-text").textContent =
    params.descripcion;
  template.content.querySelector(".ss__cont-img").src = params.imagen;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getMyServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/skgryj111lli/environments/master/entries?access_token=aTnhAttXnsH4e8xRgQRFUI_CpZr_uN8qa6ts0Ps9p1I&&content_type=myservices"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          descripcion: item.fields.descripcion,
          imageID: item.fields.imagen.sys.id,
          includes: data.includes.Asset,
        };
      });
      fieldsCollection.forEach((item) => {
        const id = buscarAsset(item.imageID, item.includes);
        item.imagen = "https:" + id.fields.file.url;
      });
      return fieldsCollection;
    });
}

function buscarAsset(imageID, includes) {
  const located = includes.find((x) => {
    return x.sys.id == imageID;
  });
  return located;
}

function main() {
  const containerHeader = document.querySelector(".header-cont");
  headerAdd(containerHeader);

  const formEl = document.querySelector(".form-cont");
  formAdd(formEl);

  enviarForm();

  const footerEl = document.querySelector(".footer-cont");
  footerAdd(footerEl);

  getWelcome();
  getAboutMe();

  getMyServices().then((services) => {
    console.log(services);
    for (const s of services) {
      addMyServices(s);
    }
  });
}

main();
