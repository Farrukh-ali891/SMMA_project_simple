import React from 'react'
import CopyrightDB from './CopyrightDB'
import { Link } from 'react-router-dom'

const DashBoardMain = () => {
    return (
        <>
            {/* <!-- PAGE CONTENT--> */}
            <div className='page-wrapper'>
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
                                                <li className="list-inline-item">Swirl Marketing Dashboard</li>
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
                                    <h1 className="title-index">Welcome back <span>Haider</span></h1>
                                    <hr className="line-seprate" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- END WELCOME--> */}






                    <CopyrightDB />
                </div>
            </div>
        </>
    )
}

export default DashBoardMain