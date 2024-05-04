import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const EmailMarketing = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets/images/banner/em-b.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Email Marketing</h2>
                        <p>Services / Email Marketing</p>
                        <Link to="/services"><button className="normal4">Our Services</button></Link>
                    </div>
                </div>
            </section>

            <section className="details">
                <img src="/src/assets/images/banner/em-p.jpg" alt="" />
                <div className="det">
                    <h1>Permission-Based</h1>
                    <p>
                        Email marketing is a digital marketing strategy that involves sending targeted emails to a group of recipients with the goal of building relationships, engaging customers, and driving conversions. It's a powerful tool for businesses to communicate directly with their audience, deliver valuable content, and promote products or services.
                        <br /> <br />
                        Effective email marketing begins with obtaining permission from recipients to send them emails. This helps ensure that your messages are well-received and comply with privacy regulations.
                        <br /> <br />
                        Building and maintaining segmented subscriber lists allows you to tailor your emails to specific audience segments, increasing relevancy and engagement.
                    </p>
                    <br />

                </div>
            </section>

            <section className="details2">
                <div className="det">
                    <h1>More About Email Marketing</h1>
                    <p>
                        Email marketing is a versatile strategy that can be tailored to various business goals and customer segments. When executed effectively, it can nurture leads, retain customers, drive sales, and foster brand loyalty.
                        <br /> <br />
                        Tailoring emails based on recipient data, such as their name, purchase history, or location, enhances engagement and makes emails feel more relevant.
                        <br /> <br />
                        Providing valuable and engaging content is crucial. Emails should offer information, solutions, entertainment, or incentives that resonate with recipients.
                        <br /> <br />
                        Using email marketing platforms, you can automate campaigns triggered by specific actions, such as welcoming new subscribers, sending follow-ups, and re-engaging inactive users.
                    </p>
                </div>
                <img src="/src/assets/images/banner/em-p1.jpg" alt="" />
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

export default EmailMarketing