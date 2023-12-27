import '../../styles/style.css'

class HeaderBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
            .app-bar {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem 3rem;
                gap: 1rem;
                background-color: var(--primary);
                color: var(--text);
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                cursor: pointer;
            }
  
            .app-bar img {
                width: auto;
                height: 3rem;
                cursor: pointer;
            }
        </style>
        
        <header>
            <div class="app-bar">
                <img class="app-bar__logo" src="../assets/icons/movie.png" alt="logo"> 
                <h1 class="app-bar__tittle">YMovies</h1>
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-bar', HeaderBar);
  
