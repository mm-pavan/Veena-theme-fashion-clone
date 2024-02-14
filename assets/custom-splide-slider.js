console.log("Splide started");

class CustomSplideSlider extends HTMLElement {
  constructor() {
    super();
    this.element = this.querySelector(".splide");
    this.options = JSON.parse(this.querySelector("script").textContent);
    this.initSlider();
  }

  initSlider() {
    new Splide(this.element, this.options).mount();
  }
}

customElements.define("custom-splide-slider", CustomSplideSlider);
console.log("Splide mounted");
