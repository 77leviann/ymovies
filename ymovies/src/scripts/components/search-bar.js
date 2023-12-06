class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        .search {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }

        .search-container {
            display: flex;
            width: 80%;
            padding: 1rem;
            border-radius: 1rem;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
        
        .search-container input {
            width: 75%;
            padding: 1rem;
            border: 0;
        }
        
        .search-container input:focus {
            outline: 0;
            border-bottom: 2px solid var(--secondary);
        }
        
        .search-container input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container  input::placeholder {
            color: var(--black);
            font-weight: normal;
        }
        
        .search-container button {
            width: 24%;
            cursor: pointer;
            margin-left: auto;
            padding: 1rem;
            background-color: var(--primary);
            color: var(--secondary);
            border: 0;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 768px){
            .search-container {
            flex-direction: column;
            position: static;
            }
    
            .search-container input {
            width: 100%;
            margin-bottom: 1rem;
            }
    
            .search-container button {
            width: 100%;
            }
        }

    </style>
    <div class="search">
        <div id="search-container" class="search-container">
        <input placeholder="Search Movies..." id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
        </div>
    </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
