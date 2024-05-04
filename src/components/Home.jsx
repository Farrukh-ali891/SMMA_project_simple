import React, { useEffect, useState } from 'react'
import MySlider from './MySlider';
import PreLoader from './PreLoader';
import WorkProcess from './WorkProcess';
import TeamTestimonial from './TeamTestimonial';
import PricingPlans from './PricingPlans';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        AOS.init({duration: 1500})
    }, [])



    return (
        <>
            {/* {isLoading ? <PreLoader /> : */}

                <main>



                    {/* <!-- ***** Welcome Area Start ***** --> */}
                    <div className="welcome-area" id="welcome">

                        {/* <!-- ***** Header Text Start ***** --> */}
                        <div className="header-text">
                            <div className="container">
                                <div className="row">
                                    <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                        <h1>We provide the best <strong style={{ color: "white" }}>strategy</strong><br />to grow up your <strong style={{ color: "white" }}>business</strong></h1>
                                        <p>Join us in crafting conversations that matter. Empower your brand through meaningful engagement and social influence</p>
                                        <a href="#features" className="main-button-slider">Get Quote</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ***** Header Text End ***** --> */}
                    </div>
                    {/* <!-- ***** Welcome Area End ***** --> */}

                    <section className="section home-feature">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slider-container">

                                        <MySlider />



                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <!-- ***** Features Big Item Start ***** --> */}
                    <section className="section padding-top-70 padding-bottom-0" id="features">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-aos="fade-right">
                                    <img src="src/assets/images/int2.png" className="rounded img-fluid d-block mx-auto fade-in-image" />
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
                                    <div className="left-heading">
                                        <h2 className="section-title">Let's discuss about your project</h2>
                                    </div>
                                    <div className="left-text">
                                        <p>Your project is our focus. We're eager to delve into the details, understand your vision, and collaborate to bring it to life. Let's start a conversation that leads to your project's success.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="hr"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ***** Features Big Item End ***** --> */}

                    {/* <!-- ***** Features Big Item Start ***** --> */}
                    <section className="section padding-bottom-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                    <div className="left-heading">
                                        <h2 className="section-title">We can help you to grow your business</h2>
                                    </div>
                                    <div className="left-text">
                                        <p>Experience exponential growth for your business with our tailored solutions. Let our expertise pave the way for your success as we work together to expand your brand, reach new audiences, and achieve your goals.</p>
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"  data-aos="fade-left">
                                    <img src="src/assets/images/help.png" className="rounded img-fluid d-block mx-auto fade-in-image" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ***** Features Big Item End ***** --> */}

                    {/* !-- ***** Home Parallax Start ***** --> */}
                    <WorkProcess />
                    {/* <!-- ***** Home Parallax End ***** --> */}

                    {/* <!-- ***** Testimonials Start ***** --> */}
                    <TeamTestimonial />
                    {/* <!-- ***** Testimonials End ***** --> */}



                    {/* <!-- ***** demo ***** --> */}
                    <div className="demo">
                        <div className="demo-box">
                            <p>Save time and grow your bussiness with us!</p>
                            <button className="demo-btn">VIEW ON-DEMAND DEMO</button>
                        </div>
                    </div>
                    {/* <!-- ***** demo ***** --> */}

                    {/* <!-- ***** Pricing Plans Start ***** --> */}
                    <PricingPlans data-aos="fade-in"/>
                    {/* <!-- ***** Pricing Plans End ***** --> */}


                    {/* <!-- ***** Counter Parallax Start ***** --> */}
                    <section className="counter">
                        <div className="content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="count-item decoration-bottom">
                                            <strong>126</strong>
                                            <span>Projects</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="count-item decoration-top">
                                            <strong>63</strong>
                                            <span>Happy Clients</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="count-item decoration-bottom">
                                            <strong>18</strong>
                                            <span>Awards Wins</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="count-item">
                                            <strong>27</strong>
                                            <span>Countries</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ***** Counter Parallax End ***** -->    */}

                    {/* <!-- ***** Blog Start ***** --> */}
                    <section className="section" id="blog">
                        <div className="container">
                            {/* <!-- ***** Section Title Start ***** --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="center-heading">
                                        <h2 className="section-title">Blog Entries</h2>
                                    </div>
                                </div>
                                <div className="offset-lg-3 col-lg-6">
                                    <div className="center-text">
                                        <p>Exploring insights and inspiration through our blog entries. Dive into a world of valuable content where we share expertise, trends, and perspectives. Join the conversation as we uncover new horizons and offer fresh perspectives on the topics that matter most.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ***** Section Title End ***** --> */}

                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="blog-post-thumb">
                                        <div className="img">
                                            <img src="src/assets/images/blog-item-01.png" alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <h3>
                                                <a href="#">Vivamus ac vehicula dui</a>
                                            </h3>
                                            <div className="text">
                                                Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                                            </div>
                                            <a href="#" className="main-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="blog-post-thumb">
                                        <div className="img">
                                            <img src="src/assets/images/blog-item-02.png" alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <h3>
                                                <a href="#">Phasellus convallis augue</a>
                                            </h3>
                                            <div className="text">
                                                Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                                            </div>
                                            <a href="#" className="main-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="blog-post-thumb">
                                        <div className="img">
                                            <img src="src/assets/images/blog-item-03.png" alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <h3>
                                                <a href="#">Nam gravida purus non</a>
                                            </h3>
                                            <div className="text">
                                                Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
                                            </div>
                                            <a href="#" className="main-button">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- ***** Blog End ***** --> */}
                </main >
                {/* } */}
        </>


    )
}

export default Home