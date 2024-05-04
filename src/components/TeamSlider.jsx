import React, { useRef, useEffect } from "react";
import {Swiper } from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MySwiper() {
    const swiperRef = useRef(null);

    useEffect(() => {

        swiperRef.current = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 2000,
            },
        }

        );

        console.log(swiperRef);
    }, []);

    return (
        <>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/haider.JPG" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Muhammad Haider Ashraf</h3>

                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/fizba.JPG" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Fizba Azhar</h3>

                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/ZEE.jpg" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Zeeshan Anayiat</h3>

                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/haider.JPG" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Muhammad Haider Ashraf</h3>

                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/fizba.JPG" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Fizba Azhar</h3>

                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/ZEE.jpg" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Zeeshan Anayiat</h3>

                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/haider.JPG" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Muhammad Haider Ashraf</h3>

                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/fizba.JPG" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Fizba Azhar</h3>

                        </div>
                    </div >

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/ZEE.jpg" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Zeeshan Anayiat</h3>

                        </div>
                    </div >

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/haider.JPG" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Muhammad Haider Ashraf</h3>

                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/fizba.JPG" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Fizba Azhar</h3>

                        </div>
                    </div >

                    <div className="swiper-slide">
                        <div className="card">
                            <img src="/src/assets/images/ZEE.jpg" alt="" srcSet="" />
                            <div className="review">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                            <h3>Zeeshan Anayiat</h3>

                        </div>
                    </div >

                </div >
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div >
        </>
    );
}

export default MySwiper;
