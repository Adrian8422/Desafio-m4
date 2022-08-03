export class ButtonComp extends HTMLElement {
  constructor() {
    super();
  }
  addStyle() {
    const style = document.createElement("style");
    style.innerHTML = `
    navMenu > span {
        display: block;
        width: 28px;
        height: 2px;
        border-radius: 9999px;
        background-color: black;
      }
      #navMenu > span:not(:last-child) {
        margin-bottom: 7px;
        filter: drop-shadow(2px 0px 1px #000);
      }
      
      #navMenu,
      #navMenu > span {
        width: 28px;
        transition: all 0.4s ease-in-out;
        filter: drop-shadow(1px 1px 3px #000);
      }
      
      #navMenu.active {
        transition-delay: 0.8s;
        transform: rotate(45deg);
      }
      #navMenu.active > span:nth-child(2) {
        width: 0;
      }
      #navMenu.active > span:nth-child(1),
      #navMenu.active > span:nth-child(3) {
        transition-delay: 0.4s;
      }
      #navMenu.active > span:nth-child(1) {
        transform: translateY(9px);
      }
      #navMenu.active > span:nth-child(3) {
        transform: translateY(-9px) rotate(90deg);
      }
    
    `;
    this.appendChild(style);
  }
  addListeners() {
    const navMenu = this.querySelector("#navMenu");
    navMenu.addEventListener("click", () => {
      if (navMenu.id == "navMenu") {
        navMenu.classList.add("active");
      }
    });
  }
  render() {
    this.innerHTML = `
    <div>
    <div id="navMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
    `;
    this.addListeners();
  }
}

customElements.define("buttonComp", ButtonComp);
