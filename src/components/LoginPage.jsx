import { Form, Field, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    
    return (
        <div>
            <section className="side">
                <img src="istockphoto-1127160403-612x612-removebg-preview.png" alt="" />
            </section>

            <section className="main">
                <div className="login-container">
                    <p className="title">Welcome Back To <br /> <Link to="/">Swirl Marketing</Link></p>
                    <div className="separator"></div>
                    <p className="welcome-message">
                        Please, provide login credential to proceed and have access to all our
                        services
                    </p>

                    <form className="login-form">
                        <div className="form-control">
                            <input type="text" placeholder="Username" required />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" required />
                            <i className="fas fa-lock"></i>
                        </div>

                        <button className="submit" type="submit">Login</button>
                        {/* <script>
                            function login() {
                                window.location.href = "main_page.html"; // Redirect to the next page
                            }
                        </script> */}
                    </form>

                    <p className="sign-up-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </section>
        </div>
    )
}

export default LoginPage