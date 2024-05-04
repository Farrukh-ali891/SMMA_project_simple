import React, { useEffect, useState } from 'react'
import PreLoader from './PreLoader';

const Contact = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])

    return (
        <>
        {/* {isLoading ? <PreLoader/>: */}
        
        <main className='container'>
            <section className="section contact" id="contact" aria-label="contact">
                <div className="container">

                    <h2 className="h2 section-title">Let's Contact With Us</h2>

                    <p className="section-text">
                        Don't Hesitate to Reach Out
                    </p>

                    <form action="" className="contact-form">

                        <div className="input-wrapper">
                            <input type="text" name="name" aria-label="name" placeholder="Your name*" required className="input-field" />

                            <input type="email" name="email_address" aria-label="email" placeholder="Email address*" required
                                className="input-field" />
                        </div>

                        <div className="input-wrapper">
                            <input type="text" name="subject" aria-label="subject" placeholder="Subject" className="input-field" />

                            <input type="number" name="phone" aria-label="phone" placeholder="Phone number" className="input-field" />
                        </div>

                        <textarea name="message" aria-label="message" placeholder="Your message...*" required
                            className="input-field"></textarea>

                        <iframe className="google-map" src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="checkbox-wrapper">
                            <input type="checkbox" name="terms_and_policy" id="terms" required className="checkbox" />

                            <label htmlFor="terms" className="label">
                                <span style={{color: "white"}}>Accept </span>
                                <a href="#" className="label-link">Terms of Services</a> 
                                <span style={{color: "white"}}> and </span>
                                <a href="#" className="label-link">Privacy Policy</a>
                            </label>
                        </div>

                        <button type="submit" className="custom-button">Send Message</button>
                    </form>
                </div>
            </section>
        </main>

        {/* } */}
        </>
    )
}

export default Contact