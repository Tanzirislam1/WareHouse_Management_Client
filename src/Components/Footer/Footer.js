import React, { useEffect } from 'react';
import '../../../src/Style/Footer/Footer.scss';
import '../../../src/Style/Home/Home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: true, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99,
            offset: 150, // offset (in px) from the original trigger point
            delay: 250,
        });
    }, []);
    return (
        <footer id="footer-section">
            <div className="footer-background">
                <div className="container">
                    <div className="row gx-5 footer-contents row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-4">
                        <div className="col-lg-4" data-aos="fade-left"
                            data-aos-offset="150"
                            data-aos-delay="250"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false">
                            <img className='footer-logo' src="https://i.ibb.co/wCWHkjw/autozone.png" alt="autozone" border="0" />
                            <div className="social-contents">
                                <ul>
                                    <li className="facebook-bg"><a href="#" ><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="linkedin-bg"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="twitter-bg"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2"
                        >
                            <div className="footer-about-us"
                                data-aos="fade-up" data-aos-offset="150"
                                data-aos-delay="250"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false">
                                <h3 className="about-title">ABOUT US
                                </h3>
                                <div className="about-sub-titles">
                                    <p>Our story</p>
                                    <p>The team</p>
                                    <p>Press</p>
                                    <p>Jobs</p>
                                    <p>Blog</p>
                                    <p>Contact</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2" data-aos="fade-down" data-aos-offset="150"
                            data-aos-delay="250"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false">
                            <div className="footer-help-us">
                                <h3 className="help-title">HELP</h3>
                                <div className="help-sub-titles">
                                    <p>Contact & FAQ</p>
                                    <p>Track Your Order</p>
                                    <p>Returns & Refunds</p>
                                    <p>Shipping & Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-right" data-aos-offset="150"
                            data-aos-delay="250"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false">
                            <div className="mail-box">
                                <img src={require("../../../src/image/mail-box.png")} alt="" className="mail-box-icon" />
                                <h3 className="mail-box-title">Sign up for Newsleter</h3>
                            </div>
                            <div className="input-group email-group mb-3">
                                <input className="mail-input form-control" type="text" placeholder="Your Email Address"
                                    aria-label="Recipient's username" aria-describedby="button-addon2" />

                                <button className="mail-btn" type="button" id="button-addon2">Subcribe</button>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bottom">
                                <div className="copyright-text">
                                    <p>© AutoZone 2022 Designed by Tanzir islam <span className="footer-privacy">| <span
                                        className="footer-privacy-text">Privacy</span> </span> <span className="footer-terms">|
                                            <span className="footer-terms-text">Terms</span></span></p>
                                </div>
                                <img className="payment-img" src={require("../../../src/image/payment 1.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;