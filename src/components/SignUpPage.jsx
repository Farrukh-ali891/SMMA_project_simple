import { Formik, Form, Field } from 'formik'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserSchema } from '../schemas/Validation'

const SignUpPage = () => {

    // const navigate = Navigate();
    return (
        <div>
            <section className="main">
                <div className="login-container">
                    <p className="title">Welcome To <a href="home.html">Swirl Marketing</a></p>
                    <div className="separator"></div>
                    <p className="welcome-message">Please, provide Sign Up credential to proceed and have access to all our services</p>

                    <Formik
                        initialValues={{
                            email: '',
                            username: '',
                            password: '',
                            confirmPassword: '',
                        }}

                        validationSchema={UserSchema}
                        onSubmit={(values, actions) => {
                            
                            console.log("form submitted");
                        }}

                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className="login-form">
                                <div className="form-control">
                                    <Field type="text" name="email" placeholder="Email" className={errors.email && touched.email ? "input-error" : ""}/>
                                    
                                    <i className="fas fa-user"></i>
                                    {errors.email && touched.email && <p className="errorMessage">{errors.email}</p>}
                                   
        
                                </div>
                               

                                <div className="form-control">
                                    <Field type="text" name="username" placeholder="User Name" className={errors.username && touched.username ? "input-error" : ""}/>
                                    <i className="fas fa-user"></i>
                                    {errors.username && touched.username && <p className="errorMessage">{errors.username}</p>}
                                </div>

                                <div className="form-control">
                                    <Field type="password" name="password" placeholder="New Password" className={errors.password && touched.password ? "input-error" : ""}/>
                                    <i className="fas fa-lock"></i>
                                    {errors.password && touched.password && <p className="errorMessage">{errors.password}</p>}
                                </div>

                                <div className="form-control">
                                    <Field type="password" name="confirmPassword" placeholder="Confirm Password" className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}/>
                                    <i className="fas fa-lock"></i>
                                    {errors.confirmPassword && touched.confirmPassword && <p className="errorMessage">{errors.confirmPassword}</p>}
                                </div>

                                <button className="submit" type="submit" disabled={isSubmitting}>Sign Up</button>

                            </Form>
                        )}
                    </Formik>

                    <p className="sign-up-link">Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </section>
        </div>
    )
}

export default SignUpPage