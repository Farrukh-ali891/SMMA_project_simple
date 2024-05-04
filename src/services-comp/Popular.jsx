import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const Popular = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets//images/banner/pop-b.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Popular</h2>
                        <p>Services / Popular</p>
                        <Link to="/services"><button className="normal4">Our Services</button></Link>
                    </div>
                </div>
            </section>

            <section className="details">
                <img src="/src/assets//images/banner/pop-p.jpg" alt="" />
                <div className="det">
                    <h1>Brand Identity</h1>
                    <p> Social popularity is the digital currency of our interconnected world. In an era where social media platforms serve as the global stage for self-expression and communication, achieving social popularity holds immense significance. It's not merely about amassing followers, likes, or shares; it's about creating a magnetic presence that resonates with audiences on a personal level.</p>
                    <p>The journey to social popularity is paved with authenticity and relatability. Brands and individuals alike must curate content that aligns with the values, aspirations, and interests of their target audience. This authenticity is the cornerstone of building a genuine connection that transcends the digital realm and becomes a part of people's lives.</p>
                    <p>Ultimately, social popularity is a reflection of resonance. It's about resonating with the hopes, dreams, and curiosities of a digital audience that seeks connection and inspiration. Whether it's a brand making a meaningful impact or an individual sharing their journey, the allure of social popularity lies in the power to inspire, influence, and leave a lasting imprint on the ever-evolving canvas of the digital landscape.</p>
                </div>
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

export default Popular