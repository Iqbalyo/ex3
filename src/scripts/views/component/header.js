class HeaderPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
            <div class="logo">Savor Panorama</div>
            <button id="hamburger" tabindex="0" aria-label="Tombol menu" class="drawer">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </button>
            <nav class="nav-bar">
                <ul>
                    <li>
                        <a href="/" class="active">Home</a>
                    </li>
                    <li>
                        <a href="#/favorite">Favorite</a>
                    </li>
                    <li>
                        <a rel="noopener" href="https://www.linkedin.com/in/iqbalmustakim" target="_blank">About us</a>
                    </li>
                </ul>
            </nav>
        </header>`;
  }
}

export default HeaderPage;
