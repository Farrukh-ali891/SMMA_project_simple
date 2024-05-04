import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const BrandMarketing = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets/images/banner/bm-b.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Brand Marketing</h2>
                        <p>Services / Brand Marketing</p>
                        <Link to="/services"><button className="normal4">Our Services</button></Link>
                    </div>
                </div>
            </section>


            <section className="details">
                <img src="/src/assets/images/banner/bm-p.jpg" alt="" />
                <div className="det">
                    <h1>Brand Identity</h1>
                    <p>
                        Developing a consistent and visually appealing brand identity through elements like logos, color schemes, typography, and visual style.
                        <br /> <br />
                        Brand marketing revolves around establishing a clear and consistent brand identity. This includes visual elements like logos, color schemes, typography, and design elements that create a unique and recognizable look.
                        <br />
                        <br />
                        Brand marketing helps define a brand's position in the market. This involves identifying where the brand fits in relation to competitors and how it addresses the specific needs of its target audience.
                    </p>
                    <br />
                    <p>Building a brand is a long-term endeavor. Effective brand marketing involves creating sustainable strategies that adapt to changing market trends and customer preferences. Brand marketing aims to create strong brand loyalty. Loyal customers not only make repeat purchases but also become advocates who refer others to the brand.</p>
                </div>
            </section>

            <section className="details2">
                <div className="det">
                    <h1>Brand Positioning</h1>
                    <p>
                        Brand positioning is a critical strategic element in marketing that defines how a brand is perceived in the minds of consumers relative to its competitors. It's about identifying a unique and favorable place for the brand in the market and crafting a message that communicates this positioning to the target audience.
                        <br /> <br />
                        Brand positioning is essential because it differentiates a brand from its competitors. In a crowded market, it's crucial to stand out and offer something distinct that resonates with your target audience.
                        <br /> <br />
                        Brand positioning is about carving out a distinct and valuable space for your brand in the minds of consumers. It's a process that requires a deep understanding of your audience, competition, and your brand's strengths to create a memorable and compelling position that resonates with customers.
                    </p>
                </div>
                <img src="/src/assets/images/banner/bm-p1.jpg" alt="" />
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

export default BrandMarketing