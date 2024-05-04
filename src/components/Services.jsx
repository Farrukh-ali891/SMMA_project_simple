import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TeamTestimonial from './TeamTestimonial';
import WorkProcess from './WorkProcess';
import PreLoader from './PreLoader';
import DevTeam from './DevTeam';


const Services = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        setTimeout(() => {
            setIsLoading(false);
            document.getElementsByClassName('carousel-control-next-icon')[0].click();
        }, 5000);
    }, [])

    const redirect = (value) => {
        navigate(`/services/${value}`);
    }
    return (
        <>

            {/* {isLoading ? <PreLoader /> : */}

                <div>
                    {/* Services headings */}
                    <section className="hero-section">
                        <div className="container">

                            <h1 className="text-white text-center">
                                "Your Success Story Starts Here Embrace Our Services."
                            </h1>

                            <button className="normal3" id="scrollButton">Our Services</button>

                        </div>
                    </section>

                    {/* Services clickables */}
                    <section className="services" id="servicess">
                        {/* <!-- <img className="background" src="images/My project-2.png" alt=""> -->
           <!-- <img src="images/blue box.jpg" alt="" className="blue_line"> --> */}

                        <h2 style={{fontSize: "45px"}}>These are the <strong>SERVICES</strong> we are providing!</h2>

                        <div className="container service-container" >

                            <img
                                src="src/assets/images/services/digital marketing.png"
                                id="digitalMarketingImage"
                                alt=""
                                onClick={() => redirect("digitalmarketing")}
                            />

                            <img
                                src="src/assets/images/services/contentcreater.png"
                                id="contentCreatorImage"
                                alt=""
                                onClick={() => redirect("contentcreator")}
                            />

                            <img
                                src="src/assets/images/services/brand marketing.png"
                                id="brandMarketingImage"
                                alt=""
                                onClick={() => redirect("brandmarketing")}
                            />

                            <img
                                src="src/assets/images/services/e mail marketing.png"
                                id="emailMarketingImage"
                                alt=""
                                onClick={() => redirect("emailmarketing")}
                            />

                            <img
                                src="src/assets/images/services/fiverr.png"
                                id="fiverImage"
                                alt=""
                                onClick={() => redirect("fiver")}
                            />

                            <img
                                src="src/assets/images/services/googl ads.png"
                                id="googleAdsImage"
                                alt=""
                                onClick={() => redirect("googleads")}
                            />

                            <img
                                src="src/assets/images/services/our team.png"
                                id="ourTeamImage"
                                alt=""
                                onClick={() => redirect("ourteam")}
                            />

                            <img
                                src="src/assets/images/services/popular.png"
                                id="popularImage"
                                alt=""
                                onClick={() => redirect("popular")}
                            />

                            <img
                                src="src/assets/images/services/youtube.png"
                                id="youtubeImage"
                                alt=""
                                onClick={() => redirect("youtube")}
                            />

                            <img
                                src="src/assets/images/services/upworknew.png"
                                id="upworkImage"
                                alt="UpworkImage"
                                onClick={() => redirect("upwork")}
                            />
                        </div>
                    </section>

                    {/* <!-- ***** demo ***** --> */}
                    <div className="demo">
                        <div className="demo-box">
                            <p>Save time and grow your bussiness with us!</p>
                            <button className="demo-btn">VIEW ON-DEMAND DEMO</button>
                        </div>
                    </div>

                    {/* <!-- ***** Home Parallax Start ***** --> */}
                    <WorkProcess />
                    {/* <!-- ***** Home Parallax End ***** --> */}


                    {/* <!-- ***** Testimonials Start ***** --> */}
                    <TeamTestimonial />
                    {/* <!-- ***** Testimonials End ***** --> */}

                    {/* <!-- PROJECTS Start --> */}
                    <div className="pro">
                        <div className="heading">
                            <h2 style={{color: "white"}}>Recent Projects</h2>
                            <p>These are the current projects our team working on.  </p>
                        </div>


                        <div className="d-sm-flex justify-content-center align-items-center ">
                            <div id="carouselExampleInterval" className="carousel slide w-50" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active custom-item" >
                                        <img src="src/assets/images/mort.png" className="d-block w-100 project" alt="..." />
                                    </div>

                                    <div className="carousel-item active" >
                                        <img src="src/assets/images/ELISHAPRO.png" className="d-block w-100" alt="..." />
                                    </div>

                                    <div className="carousel-item active" >
                                        <img src="src/assets/images/go trolly.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- PROJECTS End --> */}

                    {/* <!-- Slider for testing --> */}
                    <div>
                        <DevTeam />

                    </div>

                    {/* <!-- ----------------------- --> */}
                </div>


            {/* } */}
        </>
    )
}

export default Services