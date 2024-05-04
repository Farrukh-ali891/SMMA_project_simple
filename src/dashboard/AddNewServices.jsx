import React from 'react'
import "../assets/css/custom2.css"
import CopyrightDB from "./CopyrightDB"
import { Link } from 'react-router-dom'

const AddNewServices = () => {
    return (
        <>
            <div className="page-content--bgf7">
                {/* <!-- BREADCRUMB--> */}
                <section className="au-breadcrumb2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="au-breadcrumb-content">
                                    <div className="au-breadcrumb-left">
                                        <span className="au-breadcrumb-span">You are here:</span>
                                        <ul className="list-unstyled list-inline au-breadcrumb__list">
                                            <li className="list-inline-item active">
                                                <Link to="/dashboard">Home</Link>
                                            </li>
                                            <li className="list-inline-item seprate">
                                                <span>/</span>
                                            </li>
                                            <li className="list-inline-item">Add new Services</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- END BREADCRUMB--> */}



                {/* <!-- WELCOME--> */}
                <section className="welcome p-t-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="title-4">Add New<span> Service</span></h1>
                                <hr className="line-seprate" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- END WELCOME--> */}

                <div className="container">
                    <div className="login-wrap">
                        <div className="login-content">
                            <div className="login-logo">
                                <Link to="/dashboard">
                                    <img src="src/assets/images/swirl marketing logo.png" className="ANS-logo" alt="CoolAdmin" />
                                </Link>
                            </div>
                            <div className="login-form">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <label>Sevice Name</label>
                                        <input className="au-input au-input--full" type="Course Title" name="Course Title" placeholder="Sevice Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Service Description</label>
                                        <input className="au-input au-input--full" type="Course Description" name="Course Description" placeholder="Service Description" />
                                    </div>

                                    <div className="form-group">
                                        <label>Service Category</label>
                                        <input className="au-input au-input--full" type="Course Category" name="Course Category" placeholder="Service Category" />
                                    </div>

                                    <div className="form-group">
                                        <label>Service Charges</label>
                                        <input className="au-input au-input--full" type="Playlist link" name="Playlist link" placeholder="Service Charges" />
                                    </div>




                                    <button className="au-btn au-btn--block au-btn--green m-t-20 m-b-20" type="submit">Add Service</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <CopyrightDB />
            </div>

        </>
    )
}

export default AddNewServices