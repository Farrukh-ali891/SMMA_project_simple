import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const MySlider = () => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <SliderArrow direction="prev" />,
        nextArrow: <SliderArrow direction="next" />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (

        <>
            <Slider {...settings}>
                
                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/modern strategy.png" alt="" />
                        </div>
                        <h5 className="features-title">Modern Strategy</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/influencer marketing.png" alt="" />
                        </div>
                        <h5 className="features-title">Influencer Marketing</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/video marketing.png" alt="" />
                        </div>
                        <h5 className="features-title">Video Marketing</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/live streaming.png" alt="" />
                        </div>
                        <h5 className="features-title">Live Streaming</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/social commerce.png" alt="" />
                        </div>
                        <h5 className="features-title">Social Commerce</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/stories and fleet.png" alt="" />
                        </div>
                        <h5 className="features-title">Stories and Fleets</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/data analytics.png" alt="" />
                        </div>
                        <h5 className="features-title">Data Analytics</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/embracing.png" alt="" />
                        </div>
                        <h5 className="features-title">Embracing New Platforms</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/micro moments.png" alt="" />
                        </div>
                        <h5 className="features-title">Micro-Moments</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/hashtags compaign.png" alt="" />
                        </div>
                        <h5 className="features-title">Hashtag Campaigns</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/UGC.png" alt="" />
                        </div>
                        <h5 className="features-title">User-Generated Content (UGC)</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="features-small-item">
                        <div className="icon">
                            <img src="src/assets/images/strategies/social listening.png" alt="" />
                        </div>
                        <h5 className="features-title">Social Listening</h5>
                        <p>Customize anything in this template to fit your website needs</p>
                    </div>
                </div>
                {/* <!-- ***** Features Small Item End ***** --> */}
                
            </Slider>
        </>



    );
}

// Custom arrow component
const SliderArrow = ({ direction, onClick }) => {
    return (
        <div className={`slider-nav ${direction}`} onClick={onClick}>
            {direction === 'prev' ?
                (
                    <div className="slider-prev">
                        <i className="ri-arrow-left-circle-line"></i> {/* <!-- Use appropriate icon class here --> */}
                    </div>
                ) : (
                    <div className="slider-next">
                        <i className="ri-arrow-right-circle-line"></i> {/* <!-- Use appropriate icon class here --> */}
                    </div>
                )}
        </div>
    );
};

export default MySlider;
