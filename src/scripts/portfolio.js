function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio__content");

  template.content.querySelector(".portfolio-card__title").textContent =
    params.title;

  template.content.querySelector(".portfolio-card__text").textContent =
    params.descripcion;

  template.content.querySelector(".portfolio-card__img").src = params.imagen;

  template.content.querySelector(".portfolio-card__link").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/skgryj111lli/environments/master/entries?access_token=aTnhAttXnsH4e8xRgQRFUI_CpZr_uN8qa6ts0Ps9p1I&&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data);

      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          descripcion: item.fields.descripcion,
          url: item.fields.url,
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
  getWorks().then((works) => {
    for (const w of works) {
      addWorkCard(w);
    }
  });

  const footerEl = document.querySelector(".footer-cont");
  footerAdd(footerEl);

  const containerHeader = document.querySelector(".header-cont");
  headerAdd(containerHeader);
}
main();
