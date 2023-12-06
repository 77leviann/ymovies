import '../../styles/style.css'

class FooterBar extends HTMLElement {
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
        footer {
            background-color: var(--primary);
            color: var(--text);
            padding: 1rem 0;
            text-align: center;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 1rem;
        }
        
        .footer-content {
            width: 100%;
            margin: 0 auto;
            padding: 0 1.5rem;
        }
      </style>

      <footer>
        <div class="footer-content">
            <p>&copy; 2023 Levian Dandra</p>
        </div>
      </footer>
      `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);
  