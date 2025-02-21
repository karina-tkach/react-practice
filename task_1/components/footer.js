class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .footer {
                background-color: #1C1E53;
                color: white;
                padding-top: 40px;
            }

            .footer-container {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                max-width: 1200px;
                margin: auto;
                padding: 0 20px;
            }

            .footer-left {
                width: 45%;
            }

            .logo-footer {
                font-size: 38px;
                font-weight: bold;
            }

            .contact-box {
                background-color: #FCD980;
                display: flex;
                justify-content: space-between;
                padding-left: 30px;
                padding-top: 23px;
                padding-bottom: 23px;
                padding-right: 145px;
                margin-top: 20px;
                color: black;
            }

            .heading-contacts {
                margin: 0;
                font-size: 18px;
                color:  #282938;
                font-weight: 600;
            }

            .contact-item p {
                margin: 5px 0 0;
                font-size: 16px;
                color: #282938;
            }

            .footer-right {
                width: 45%;
                text-align: left;
            }
            
            .footer-right>p, .footer-left>p {
                color: #BBBBCB
            }

            .footer-right h2 {
                font-size: 48px;
                font-weight: bold;
            }

            .social-icons {
                margin-top: 15px;
            }

            .social-icons a {
                color: white;
                font-size: 18px;
                margin-right: 10px;
                text-decoration: none;
            }

            .footer-bottom {
                background-color: #F8F8F8;
                padding: 15px 0;
                display: flex;
                align-items: center;
                justify-content: space-around;
                color: black;
            }

            .footer-bottom p {
                font-size: 16px;
            }

            .footer-nav {
                list-style: none;
                padding: 0;
            }

            .footer-nav li {
                display: inline;
                margin-right: 15px;
            }

            .footer-nav a {
                text-decoration: none;
                color: black;
                font-size: 16px;
                transition: color 0.3s;
            }

            .footer-nav a:hover {
                color: #555;
            }

        </style>
     <footer class="footer">
    <div class="footer-container">
        <div class="footer-left">
            <h2 class="logo-footer">{Finsweet</h2>
            <p>We are always open to discuss your project and improve your online presence.</p>
            <div class="contact-box">
                <div class="contact-item">
                    <p class="heading-contacts">Email me at</p>
                    <p>contact@website.com</p>
                </div>
                <div class="contact-item">
                    <p class="heading-contacts">Call us</p>
                    <p>0927 6277 28525</p>
                </div>
            </div>
        </div>

        <div class="footer-right">
            <h2>Lets Talk!</h2>
            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <p>Copyright 2025, Finsweet.com</p>
        <ul class="footer-nav">
            <li><a href="main.html">Home</a></li>
            <li><a href="about.html">About us</a></li>
            <li><a href="features.html">Features</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="blog.html">Blog</a></li>
        </ul>
    </div>
</footer>

      `;
    }
}

customElements.define('footer-component', Footer);