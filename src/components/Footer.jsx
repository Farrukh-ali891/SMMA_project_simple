import React, { useEffect } from 'react'

const Footer = () => {
    return (
        <>
            <section id="news-letter">
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest <span>UPDATES!</span></p>

                </div>

                <div className="form">
                    <input type="text" placeholder="Your Email Address" />
                    <button className="normal">Sign Up</button>
                </div>
            </section>

            <footer className="site-footer section-padding">
                <div className="container">
                    <div className="row">

                        {/* <!-- <div className="col-lg-3 col-12 mb-4 pb-2">
                            <a className="navbar-brand mb-2" href="index.html">
                                <i className="ri-creative-commons-nc-fill custom-icon-footer"></i>
                                <span>Swirl Marketing</span>
                            </a>
                        </div> --> */}

                        <div className="col-lg-3 col-md-4 col-6">
                            <h6 className="site-footer-title mb-3">Resources</h6>

                            <ul className="site-footer-links">
                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">Home</a>
                                </li>

                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">How it works</a>
                                </li>

                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">FAQs</a>
                                </li>

                                <li className="site-footer-link-item">
                                    <a href="#" className="site-footer-link">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                            <h6 className="site-footer-title mb-3">Information</h6>

                            <p className="text-white d-flex mb-1">
                                <a href="tel: 305-240-9671" className="site-footer-link">
                                    305-240-9671
                                </a>
                            </p>

                            <p className="text-white d-flex">
                                <a href="mailto:info@company.com" className="site-footer-link">
                                    info@company.com
                                </a>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English</button>

                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Thai</button></li>

                                    <li><button className="dropdown-item" type="button">Myanmar</button></li>

                                    <li><button className="dropdown-item" type="button">Arabic</button></li>
                                </ul>
                            </div>

                            <p className="copyright-text mt-lg-5 mt-4">Copyright © 2048 Topic Listing Center. All rights reserved.
                                <br /><br />Design: <a rel="nofollow" href="#" target="_blank">Swirl Marketing</a></p>

                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer

