import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `<img class="show-background-img"
    src="/media/cc0-images/grapefruit-slice-332-332.jpg"
    alt="Show Background Image">`;
  }
}
