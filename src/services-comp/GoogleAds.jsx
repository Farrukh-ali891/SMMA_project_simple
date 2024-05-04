import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const GoogleAds = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets/images/banner/go-b.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Google Ads</h2>
                        <p>Services / Google Ads</p>
                        <Link to="/services"><button className="normal4">Our Services</button></Link>
                    </div>
                </div>
            </section>

            <section className="details">
                <img src="/src/assets/images/banner/go-p.jpg" alt="" />
                <div className="det">
                    <h1>Google Ads</h1>
                    <p>Google Ads, formerly known as Google AdWords, is a powerful online advertising platform offered by Google. It allows businesses and advertisers to create and display ads across various Google services, websites, and platforms. Google Ads operates on a pay-per-click (PPC) model, where advertisers pay only when users click on their ads.
                        <br />
                        <br />
                        Google Ads supports various ad formats, including text ads, image ads, video ads, responsive ads, and more. These ads can appear on Google Search, Google Display Network, YouTube, and other Google properties.
                        <br />
                        <br />
                        This network includes a vast collection of websites, blogs, and apps where advertisers can display image and video ads. It's a way to reach users who are browsing content relevant to their interests.
                        <br />
                        <br />
                        Google Ads provides metrics like click-through rate (CTR), conversion rate, impression share, average position, and more, allowing advertisers to measure the effectiveness of their campaigns.
                    </p>
                </div>
            </section>

            <section className="details2">
                <div className="det">
                    <h1>Bid Strategies</h1>
                    <p>Advertisers can choose from various bidding strategies like manual CPC (Cost-Per-Click), automated bidding, target CPA (Cost-Per-Acquisition), and more, depending on their goals.
                        <br />
                        <br />
                        Advertisers can enhance their ads with extensions like site link extensions, callout extensions, location extensions, and more, providing additional information to users.
                        <br />
                        <br />
                        Google assigns a Quality Score to ads based on their relevance, click-through rate (CTR), and landing page experience. A higher Quality Score can result in better ad placements and lower costs.
                    </p>
                </div>
                <img src="/src/assets/images/banner/go-p1.jpg" alt="" />
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

export default GoogleAds