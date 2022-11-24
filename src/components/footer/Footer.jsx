import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-nav">

                        <ul className="footer-nav-list">

                            <li className="footer-nav-item">
                                <h2 className="nav-title">Popular Categories</h2>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Fashion</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Electronic</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Cosmetic</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Health</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Watches</a>
                            </li>

                        </ul>

                        <ul className="footer-nav-list">

                            <li className="footer-nav-item">
                                <h2 className="nav-title">Products</h2>
                            </li>

                            <li className="footer-nav-item">
                                <p className="footer-nav-link">Prices drop</p>
                            </li>

                            <li className="footer-nav-item">
                                <p className="footer-nav-link">New products</p>
                            </li>

                            <li className="footer-nav-item">
                                <p className="footer-nav-link">Best sales</p>
                            </li>

                            <li className="footer-nav-item">
                                <p className="footer-nav-link">Best sales</p>
                            </li>

                        </ul>
                        <ul className="footer-nav-list">

                            <li className="footer-nav-item">
                                <h2 className="nav-title">Our Company</h2>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Delivery</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Legal Notice</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Terms and conditions</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">About us</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Secure payment</a>
                            </li>

                        </ul>
                        <ul className="footer-nav-list">

                            <li className="footer-nav-item">
                                <h2 className="nav-title">Services</h2>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Prices drop</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">New products</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Best sales</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Contact us</a>
                            </li>

                            <li className="footer-nav-item">
                                <a href="#" className="footer-nav-link">Sitemap</a>
                            </li>

                        </ul>
                        <ul className="footer-nav-list">

                            <li className="footer-nav-item">
                                <h2 className="nav-title">Contact</h2>
                            </li>

                            <li className="footer-nav-item">
                                <div className="icon-box">
                                    <ion-icon name="location-outline"></ion-icon>
                                </div>

                                <address className="content">
                                    419 State 414 Rte
                                    Beaver Dams, New York(NY), 14812, USA
                                </address>
                            </li>

                            <li className="footer-nav-item">
                                <div className="icon-box">
                                    <ion-icon name="call-outline"></ion-icon>
                                </div>

                                <a href="tel:+607936-8058" className="footer-nav-link">(607) 936-8058</a>
                            </li>

                            <li className="footer-nav-item">
                                <div className="icon-box">
                                    <ion-icon name="mail-outline"></ion-icon>
                                </div>

                                <a href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</a>
                            </li>

                        </ul>

                        <ul className="footer-nav-list">

                            <li className="footer-nav-item">
                                <h2 className="nav-title">Follow Us</h2>
                            </li>

                            <li>
                                <ul className="social-link">

                                    <li className="footer-nav-item">
                                        <a href="#" className="footer-nav-link">
                                            <ion-icon name="logo-facebook"></ion-icon>
                                        </a>
                                    </li>

                                    <li className="footer-nav-item">
                                        <a href="#" className="footer-nav-link">
                                            <ion-icon name="logo-twitter"></ion-icon>
                                        </a>
                                    </li>

                                    <li className="footer-nav-item">
                                        <a href="#" className="footer-nav-link">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                    </li>

                                    <li className="footer-nav-item">
                                        <a href="#" className="footer-nav-link">
                                            <ion-icon name="logo-instagram"></ion-icon>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </div>


                </div>
                <div className="footer-bottom">

                    <div className="container">

                        <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/payment.png" alt="payment method" className="payment-img" />



                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer