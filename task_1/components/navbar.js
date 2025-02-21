class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .navbar {
                background-color: #1C1E53;
                padding: 12px 40px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .container {
                width: 90%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 1200px;
            }

            .logo {
                color: white;
                font-size: 22px;
                font-weight: bold;
                text-decoration: none;
                width: 45%;
            }

            .nav-links {
                list-style: none;
                display: flex;
                gap: 25px;
                margin: 0;
                padding: 0;
            }

            .nav-links li {
                display: inline;
            }

            .nav-links a {
                text-decoration: none;
                color:  #BBBBCB;
                font-size: 16px;
                line-height: 28px;
                transition: color 0.3s;
            }

            .nav-links a:hover {
                color: white;
            }

            .nav-links .active {
                color: white;
                font-weight: bold;
            }

            .contact-btn {
                text-decoration: none;
                color: white;
                padding: 13px 25px;
                font-size: 16px;
                border: 2px solid rgba(255, 255, 255, 0.6);
                border-radius: 41px;
                transition: all 0.3s;
            }

            .contact-btn:hover {
                border-color: white;
                background-color: rgba(255, 255, 255, 0.1);
            }
        </style>
        <nav class="navbar">
        <div class="container">
            <a href="main.html" class="logo">{Finsweet</a>
            <ul class="nav-links">
                <li><a href="main.html" class="active">Home</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="features.html">Features</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="blog.html">Blog</a></li>
            </ul>
            <a href="#" class="contact-btn">Contact us</a>
        </div>
    </nav>
      `;
    }
}

customElements.define('navbar-component', Navbar);

