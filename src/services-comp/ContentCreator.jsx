import React from 'react'
import { Link } from 'react-router-dom'
import PricingPlans from '../components/PricingPlans'
import TeamTestimonial from '../components/TeamTestimonial'

const ContentCreator = () => {
    return (
        <div>
            <section className="headings">
                <div className="image-container">
                    <img src="/src/assets/images/banner/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg" alt="" />
                    <div className="text-overlay">
                        <h2>Content Creator</h2>
                        <p>Services / Content Creator</p>
                        <Link to="/services"><button className="normal4">Our Services</button></Link>
                    </div>
                </div>
            </section>

            <section className="details">
                <img src="/src/assets/images/banner/un-liu-YOpSVJGmvmE-unsplash.jpg" alt="" />
                <div className="det">
                    <h1>The Art of Content Writing</h1>
                    <p>
                        Writing engaging content is a dynamic art form that combines creativity and planning to reach consumers on a variety of media. Effective content writing has the ability to fascinate, inform, and inspire readers whether it is a blog post, a social media caption, or website copy.
                        <br /> <br />
                        Writing content is fundamentally about forging connections. Content writers close the knowledge gap by using well crafted language and engrossing storytelling. They write captivating stories that keep readers engaged from the opening line to the final word.
                        <br /> <br />
                        A careful balance must be struck between creativity and strategy in effective content production. Each piece of content is carefully crafted to appeal to the target market and present information in a way that inspires action. The interaction of creativity and strategy makes sure that the material both attracts attention and leads to the intended results.
                    </p>
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

export default ContentCreator