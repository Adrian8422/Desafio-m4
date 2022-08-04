function footerAdd(el) {
  var componentEl = document.createElement("div");
  componentEl.innerHTML = `<section class="footer">
    <h3  href="./index.html" class="footer__name">Adri</h3>
    <div class="footer__container-links">
      <a class="footer__link" href="https://www.instagram.com/adrian_8422/"
        >Instagram
        <img src="./medias/footer/instagram (1).svg" alt style="margin-left: 5px"
      /></a>
      <a class="footer__link" href=""
        >Linkedin <img src="./medias/footer/linkedin.svg" alt style="margin-left: 5px"
      /></a>
      <a class="footer__link" href="https://github.com/Adrian8422"
        >Github <img src="./medias/footer/github.svg" alt style="margin-left: 5px"
      /></a>
    </div>
  </section>`;
  el.appendChild(componentEl);
}
