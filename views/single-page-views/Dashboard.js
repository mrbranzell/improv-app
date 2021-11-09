import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `<p>f</p>`;
    //     suggestions.map(
    //       (s) => `
    //     <p>
    //         ${s.suggestion}
    //     </p>
    //     <p>
    //         ${s.name}
    //     </p>
    // `,
    //     );
  }
}
