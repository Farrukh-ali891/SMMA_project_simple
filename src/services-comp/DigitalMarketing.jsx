import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const DigitalMarketing = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets/images/banner/dm-b.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Digital Marketing</h2>
                        <p>Services / Digital Marketing</p>
                        <Link to="/services"><button className="normal4">Our Services</button></Link>
                    </div>
                </div>
            </section>

            <section className="details">
                <img src="/src/assets/images/banner/dm-p.jpg" alt="" />
                <div className="det">
                    <h1>Pay-Per-Click Advertising</h1>
                    <p>Pay-Per-Click Advertising (PPC) is a powerful digital marketing strategy that allows advertisers to drive targeted traffic to their websites by paying for each click on their ads. This form of online advertising offers a level of precision and control that is unparalleled, enabling businesses to reach their desired audience, generate leads, and boost conversions with a measurable and immediate impact.</p>
                    <p>At the heart of PPC is the concept of bidding on keywords. Advertisers bid on specific keywords relevant to their products or services, and when users search for those keywords on search engines like Google, their ads appear as sponsored search results. The placement of these ads depends on factors like bid amount, ad quality, and relevance to the user's search query. This ensures that ads are shown to users actively seeking information related to what the advertiser offers, increasing the likelihood of meaningful engagement.</p>
                    <p>PPC platforms, like Google Ads, provide advertisers with comprehensive tools to tailor their campaigns to specific audiences. Advertisers can set daily budgets, select target demographics, choose geographic locations, and even schedule when their ads will be displayed. This level of customization ensures that the right message is delivered to the right people at the right time.</p>
                </div>
            </section>

            <section className="details2">
                <div className="det">
                    <h1>Brand Recognition</h1>
                    <p>Brand recognition is a fundamental aspect of branding that plays a pivotal role in shaping consumer perceptions and driving business success. It refers to the degree to which a target audience can identify and associate a brand with its specific attributes, values, and offerings. In essence, brand recognition is about being instantly recognizable and memorable in the minds of consumers.</p>
                    <p>The importance of brand recognition cannot be overstated. In a crowded marketplace where consumers are bombarded with choices, brands that are easily recognized and distinguished have a distinct competitive advantage. A strong brand recognition strategy fosters a sense of familiarity and trust among consumers, making them more likely to choose a recognizable brand over unfamiliar alternatives.</p>
                    <p>In a world where consumer choices are abundant, brand recognition is a beacon that guides consumers toward familiar and trusted choices. It's a powerful asset that not only drives sales and market share but also builds enduring relationships between brands and their audiences.</p>
                </div>
                <img src="/src/assets/images/banner/dm-p1.jpg" alt="" />
            </section>

            <section className="details">
                <img src="/src/assets/images/banner/dm-2.jpg" alt=""/>
                    <div className="det">
                        <h1>Online Public Relations (PR)</h1>
                        <p>Online Public Relations (PR) has emerged as a transformative force in the digital age, reshaping how businesses and individuals manage their public image and relationships with their audiences. Rooted in the principles of traditional PR, online PR harnesses the power of digital platforms to engage, influence, and connect with target audiences in a dynamic and interactive manner.</p>
                        <p>Online PR involves strategic communication efforts that leverage online channels such as social media, blogs, news websites, forums, and influencer collaborations. Its aim is to create a positive perception of a brand, mitigate negative publicity, and cultivate meaningful relationships with stakeholders.</p>
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

export default DigitalMarketing