import React, { useEffect, useState } from 'react'
import PreLoader from './PreLoader';
import DevTeam from './DevTeam';

const AboutUs = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])

    return (
        <>
        {/* {isLoading? <PreLoader/>:  */}
        
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="src/assets/images/banner/au-b.jpg" alt="" />
                    <div className="text-overlay">
                        <h2 style={{color: "white"}}>About Us</h2>
                    </div>
                </div>

            </section>

            <p className="about-us-p">
                Social Swirl is a dynamic and innovative software company founded by
                Danial Khan in 2022. Based in United Kingdom. Social Swirl specialises
                in Software and media solutions with a focus on new creations. The
                company's mission is to provide high-quality software solutions and
                media that help businesses and individuals optimise their online
                presence and achieve their goals. With a team of experienced
                professionals and a commitment to excellence, Social Swirl is
                dedicated to providing personalised, reliable, and affordable services
                to its clients. AIMS Our mission is to provide high-quality software
                solutions and media services that help businesses and individuals
                optimise their online presence and achieve their goals. At Social
                Swirl, we are committed to delivering personalised, reliable, and
                affordable services to our clients, with a focus on new creations and
                cutting- edge technologies.We maintain a team of experienced
                professionals who are dedicated to providing exceptional customer
                service and support, and we strive to build strong and lasting
                relationships with our clients based on trust, transparency, and open
                communication.
            </p>

            <section className="details">
                <img src="src/assets/images/banner/au-p.jpg" alt="" />
                <div className="det">
                    <h1>Events And Updates</h1>
                    <p>
                        We are delighted to announce an exciting new development at Social
                        Swirl: the launch of our highly anticipated Business Outsourcing
                        Project. At Social Swirl, we have always been committed to
                        delivering exceptional services and innovative solutions to meet the
                        evolving needs of our clients. With our new Business Outsourcing
                        Project, we are taking our commitment to the next level by offering
                        comprehensive outsourcing solutions tailored to enhance the
                        efficiency and productivity of your business operations.
                    </p>
                </div>
            </section>

            {/* <!-- Teams --> */}

            {/* <!-- Slider for testing --> */}
            <div>
                        <DevTeam />

                    </div>

            {/* <!-- ----------------------- --> */}

            {/* <!-- Get Quote --> */}

            <div className="quote container">
                <h2 style={{color: "white"}}>Do you like what you see?</h2>
                <p>Tell us about your project and Let's build your project together.</p>
                <button className="quote-btn">Get a Quote</button>
            </div>

            {/* <!-- -------- --> */}
        </div>
        
        {/* } */}
        </>
    )
}

export default AboutUs