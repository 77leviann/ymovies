class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
            :host {
            width: calc(33.33% - 1rem);
            gap: 1rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 0.8rem;
            overflow: hidden;
            background-color: var(--accent);
            }

            .fan-art-movie {
            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center;
            }
    
            .movie-info {
            padding: 1rem;
            gap: 1rem;
            }
    
            .movie-info h2 {
            font-size: 1rem;
            }
    
            .movie-info p {
            font-size: 1em;
            }
    
            .movie-info p.additional-info {
            font-size: 0.9rem;
            }

            @media (max-width: 768px) {
                :host {
                    width: calc(50% - 1rem);
                }
            }

            @media (max-width: 480px) {
                :host {
                    width: calc(100% - 1rem);
                }
            }
      </style>
      <div class="card">
        <img class="fan-art-movie" src="${this._movie.poster}" alt="poster">
        <div class="movie-info">
            <h2>${this._movie.name}</h2>
            <p class="additional-info">Rating: ${this._movie.rating}</p>
            <p class="additional-info">Year: ${this._movie.year}</p>
            <p class="additional-info">Cast: ${this._movie.cast.join(', ')}</p>
            <p>${this._movie.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
