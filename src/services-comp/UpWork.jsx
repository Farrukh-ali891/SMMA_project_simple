import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const UpWork = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets/images/banner/up-b.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Up Work</h2>
                        <p>Services / Up Work</p>
                        <Link to="/services"><button className="normal4">Our Services</button></Link>
                    </div>
                </div>
            </section>

            <section className="details">
                <img src="/src/assets/images/banner/up-p.jpg" alt="" />
                <div className="det">
                    <h1>Opportunity For Freelancers</h1>
                    <p>Upwork, a pioneer in the world of freelance marketplaces, has revolutionized the way businesses and freelancers collaborate on projects across the globe. Since its inception in 2015 through the merger of Elance and oDesk, Upwork has grown into a powerhouse platform that connects a diverse community of talented freelancers with businesses seeking their expertise.</p>

                    <p>At the heart of Upwork's success is its ability to bridge geographical barriers and facilitate remote work. With a vast array of categories ranging from web development and graphic design to writing and marketing, Upwork accommodates a multitude of skills and industries. Freelancers from all corners of the world can showcase their talents and secure opportunities, while businesses gain access to a pool of global talent that brings diversity and expertise to their projects.</p>

                    <p>In a world where virtual collaboration is more prevalent than ever, Upwork serves as a bridge between talent and opportunity. It embodies the spirit of remote work, innovation, and entrepreneurship, providing a digital canvas where freelancers can craft their careers and businesses can access the expertise they need to thrive in an ever-changing landscape.</p>
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

export default UpWork