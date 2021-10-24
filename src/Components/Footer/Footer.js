import React from 'react';
import "./Footer.css"
import { FaFacebookSquare, FaGooglePlusSquare, FaLinkedin, FaTwitterSquare, IconName } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-in">

                <footer class="page-footer font-small mdb-color pt-4">

                    <div class="container text-center text-md-left">

                        <div class="row text-center text-md-left mt-3 pb-3">

                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ut culpa iure debitis totam, amet atque incidunt quidem ipsam iusto praesentium cum repellendus nisi? Quidem similique possimus earum dolore? Amet!</p>
                            </div>

                            <hr class="w-100 clearfix d-md-none" />

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    <a href="#!">Lorem</a>
                                </p>
                                <p>
                                    <a href="#!">Lorem</a>
                                </p>
                                <p>
                                    <a href="#!">Lorem</a>
                                </p>
                                <p>
                                    <a href="#!">Lorem</a>
                                </p>
                            </div>

                            <hr class="w-100 clearfix d-md-none" />

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                <p>
                                    <a href="#!">Lorem</a>
                                </p>
                                <p>
                                    <a href="#!">Lorem</a>
                                </p>
                                <p>
                                    <a href="#!">Lorem</a>
                                </p>
                                <p>
                                    <a href="#!">Lorem</a>
                                </p>
                            </div>

                            <hr class="w-100 clearfix d-md-none" />

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p>
                                    <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i class="fas fa-envelope mr-3"></i> info @gmail.com</p>
                                <p>
                                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p>
                                    <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                        <hr />

                        <div class="row d-flex align-items-center">

                            <div class="col-md-7 col-lg-8">

                                <p class="text-center text-md-left">© 2020 Copyright:
                                    <a href="https://www.facebook.com/people/Md-Imranul-Haque/100071106706650/">
                                        <strong> MD Imranul Haque</strong>
                                    </a>
                                </p>

                            </div>

                            <div class="col-md-5 col-lg-4 ml-lg-0">

                                <div class="text-center text-md-right">
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item">
                                        <FaFacebookSquare />
                                        </li>
                                        <li class="list-inline-item">
                                        <FaTwitterSquare />
                                        </li>
                                        <li class="list-inline-item">
                                        <FaGooglePlusSquare />
                                        </li>
                                        <li class="list-inline-item">
                                        <FaLinkedin />
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </footer>
            </div>
        </div>

    );
};

export default Footer;