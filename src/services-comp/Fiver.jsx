import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const Fiver = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets/images/banner/fiv-b.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Fiverr</h2>
                        <p>Services / Fiverr</p>
                        <a href="services.html"><button className="normal4">Our Services</button></a>
                    </div>
                </div>
            </section>

            <section className="details">
                <img src="/src/assets/images/banner/fiv-p.jpg" alt="" />
                <div className="det">
                    <h1>Diverse Services</h1>
                    <p>Fiverr is an online platform that connects freelancers with clients seeking various digital services. It was founded in 2010 and has since become one of the largest and most popular freelance marketplaces globally. Fiverr's unique approach allows freelancers to offer their services, referred to as "Gigs," starting at a base price of $5, which is where the platform's name originates
                        <br />
                        <br />
                        Fiverr offers a wide range of services across categories such as graphic design, writing, digital marketing, programming, video editing, voiceovers, music production, and much more.
                        <br />
                        <br />
                        Fiverr has a seller leveling system that categorizes freelancers into different levels based on their performance, completion rates, customer ratings, and other factors. Higher-level sellers tend to have more credibility and visibility on the platform.
                    </p>
                </div>
            </section>

            <section className="details2">
                <div className="det">
                    <h1>Fiverr Pro</h1>
                    <p>Fiverr Pro is a premium category that showcases top-tier freelancers who have undergone a rigorous application process. These freelancers are highly skilled and offer premium services at higher price points.
                        <br />
                        <br />
                        Fiverr Business is a feature that allows businesses to manage their team's freelance collaborations within the platform. It provides tools for collaboration, project tracking, and billing.
                        <br />
                        <br />
                        Fiverr handles payments and offers various payment methods, ensuring a secure transaction process for both clients and freelancers.
                    </p>
                </div>
                <img src="/src/assets/images/banner/fiv-p1.jpg" alt="" />
            </section>

            {/* <!-- ***** Pricing Plans Start ***** --> */}
            <PricingPlans />
            {/* <!-- ***** Pricing Plans End ***** --> */}

            {/* <!-- ***** Testimonials Start ***** --> */}
            <TeamTestimonial />
            {/* <!-- ***** Testimonials End ***** --> */}
            
            <div className="quote">
                <h2>Do you like what you see?</h2>
                <p>Tell us about your project and Let's build your project together.</p>
                <button className="quote-btn">Get a Quote</button>
            </div>
        </div>
    )
}

export default Fiver