import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const OurTeam = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets/images/banner/ot-p.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Our Team</h2>
                        <p>Services / Our Team</p>
                        <Link to="/services"><button className="normal4">Our Services</button></Link>
                    </div>
                </div>
            </section>

            <section className="details">
                <img src="/src/assets/images/banner/ot-b.jpg" alt=""/>
                    <div className="det">
                        <h1>Our Team?</h1>
                        <p>At Social Swirl, our team is a dynamic fusion of creative minds and strategic thinkers, united by a shared passion for crafting compelling narratives in the digital realm. With expertise ranging from content creation and engagement strategies to data analytics and trend forecasting, we're driven by the desire to help businesses thrive in the ever-evolving landscape of social media. Our collaborative spirit, coupled with a deep understanding of platforms and trends, fuels our mission to elevate brands, spark connections, and make an impact that resonates far beyond the screens.</p>
                        <p>Our team is a symphony of innovative storytellers, design virtuosos, and analytics maestros. We thrive on crafting social media magic that transforms likes into love, clicks into conversions, and brands into legends. With a finger on the pulse of trends and an unwavering commitment to creativity, we're the driving force propelling your brand to the forefront of the digital spotlight</p>
                    </div>
            </section>

            {/* <!-- ***** Pricing Plans Start ***** --> */}
            <PricingPlans/>
            {/* <!-- ***** Pricing Plans End ***** --> */}

            {/* <!-- ***** Testimonials Start ***** --> */}
            <TeamTestimonial/>
            {/* <!-- ***** Testimonials End ***** --> */}

            <div className="quote">
                <h2>Do you like what you see?</h2>
                <p>Tell us about your project and Let's build your project together.</p>
                <button className="quote-btn">Get a Quote</button>
            </div>
        </div>
    )
}

export default OurTeam