import './movie-item.js';

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
            :host {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            }

            .error-message {
            color: red;
            font-weight: bold;
            }
      </style>
    `;

    if (Array.isArray(this._movies)) {
      this._movies.forEach(movie => {
        const movieItemElement = document.createElement('movie-item');
        movieItemElement.movie = movie;
        this.shadowDOM.appendChild(movieItemElement);
      });
    }
  }

  renderError(message) {
    const errorElement = document.createElement('div');
    errorElement.classList.add('error-message');
    errorElement.textContent = message;
    this.shadowDOM.innerHTML = '';
    this.shadowDOM.appendChild(errorElement);
  }
}

customElements.define('movie-list', MovieList);
