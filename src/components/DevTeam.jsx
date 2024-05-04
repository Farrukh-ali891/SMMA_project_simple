import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DevTeam = () => {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <SliderArrow direction="prev" />,
        nextArrow: <SliderArrow direction="next" />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="product">

                <h3 style={{color: "white"}}>Our Team</h3>
                <p>Our team is a diverse tapestry of talent and expertise, woven together by a shared passion for innovation. With a blend of creativity, dedication, and experience, we collaborate seamlessly to turn ideas into reality. Together, we are the driving force behind every success story, united by a common goal to exceed expectations and shape remarkable outcomes.</p>

                {/* <i className="pre-btn ri-arrow-left-s-line"></i>
                <i className="nxt-btn ri-arrow-right-s-line"></i> */}
                <Slider {...settings} className="product-container">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="src/assets/images/team/WaleedsProfile-b636718d.jpeg" className="product-thumb" alt="" />
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand" style={{color: "white"}}>Human resources(HR)</h2>

                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="src/assets/images/team/haider.JPG" className="product-thumb" alt="" />
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand" style={{color: "white"}}>Front-End Developer</h2>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="src/assets/images/team/fizba.JPG" className="product-thumb" alt="" />
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand" style={{color: "white"}}> Front-End Developer</h2>

                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="src/assets/images/team/WhatsApp Image 2023-08-15 at 15.31.04.jpg" className="product-thumb" alt="" />
                        </div>
                        <div className="product-info">
                            <h2 className="product-brand" style={{color: "white"}}>Graphic Designer</h2>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

// Custom arrow component
const SliderArrow = ({ direction, onClick }) => {
    return (
        <div className={`slider-nav ${direction}`} onClick={onClick}>
            {direction === 'prev' ?
                (
                    <div className="slider-prev">
                        <i className="ri-arrow-left-double-fill  devteamicon-pre"></i> {/* <!-- Use appropriate icon class here --> */}
                    </div>
                ) : (
                    <div className="slider-next">
                        <i className="ri-arrow-right-double-line  devteamicon-next"></i> {/* <!-- Use appropriate icon class here --> */}
                    </div>
                )}
        </div>
    );
};

export default DevTeam