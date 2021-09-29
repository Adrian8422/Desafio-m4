function addWorkCard(params = {}) {
  const template = document.querySelector("#services-card-template");
  const container = document.querySelector(".services__content");

  template.content.querySelector(".services-card__title").textContent =
    params.title;

  template.content.querySelector(".services-card__text").textContent =
    params.descripcion;

  template.content.querySelector(".services-card__img").src = params.imagen;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/skgryj111lli/environments/master/entries?access_token=aTnhAttXnsH4e8xRgQRFUI_CpZr_uN8qa6ts0Ps9p1I&&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          descripcion: item.fields.descripcion,
          imageID: item.fields.imagen.sys.id,
          includes: data.includes.Asset,
        };
      });

      fieldsCollection.forEach((item) => {
        const id = searchAsset(item.imageID, item.includes);
        item.imagen = "https:" + id.fields.file.url;
      });
      return fieldsCollection;
    });
}
function searchAsset(imageID, includes) {
  const located = includes.find((x) => {
    return x.sys.id == imageID;
  });
  return located;
}
function main() {
  getWorks().then((works) => {
    // // console.log(works);
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
