function main() {
  const footerEl = document.querySelector(".footer-cont");
  footerAdd(footerEl);

  const containerHeader = document.querySelector(".header-cont");
  headerAdd(containerHeader);

  const formEl = document.querySelector(".form-cont");
  formAdd(formEl);

  enviarForm();
}
main();
