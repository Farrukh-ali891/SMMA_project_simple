import React from 'react'
import { Link } from 'react-router-dom'
import CopyrightDB from './CopyrightDB'

const ServicesList = () => {
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
                                        <li className="list-inline-item">Services List</li>
                                    </ul>
                                </div>
                                <form className="au-form-icon--sm" action="" method="post">
                                    <input className="au-input--w300 au-input--style2" type="text" placeholder="Search for Services.."/>
                                    <button className="au-btn--submit2" type="submit">
                                        <i className="mdi mdi-magnify"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- END BREADCRUMB--> */}




                <section className="container">
                    <div className="row m-t-30" style={{width: "100%"}}>
                        <div className="col-md-12">
                            {/* <!-- DATA TABLE--> */}
                            <div className="table-responsive m-b-40">
                                <table className="table table-borderless table-data3">
                                    <thead>
                                        <tr>
                                            <th>Service Title</th>
                                            <th>Service Category</th>
                                            <th>Description</th>
                                            <th>Service Charges</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Front-End Developer</td>
                                            <td>Web-Development</td>
                                            <td>Html,Css,Js,ReactJs</td>
                                            <td>$5/Hr</td>
                                        </tr>
                                        <tr>
                                            <td>Front-End Developer</td>
                                            <td>Web-Development</td>
                                            <td>Html,Css,Js,ReactJs</td>
                                            <td>$5/Hr</td>
                                        </tr>
                                        <tr>
                                            <td>Front-End Developer</td>
                                            <td>Web-Development</td>
                                            <td>Html,Css,Js,ReactJs</td>
                                            <td>$5/Hr</td>
                                        </tr>
                                        <tr>
                                            <td>Front-End Developer</td>
                                            <td>Web-Development</td>
                                            <td>Html,Css,Js,ReactJs</td>
                                            <td>$5/Hr</td>
                                        </tr>
                                        <tr>
                                            <td>Front-End Developer</td>
                                            <td>Web-Development</td>
                                            <td>Html,Css,Js,ReactJs</td>
                                            <td>$5/Hr</td>
                                        </tr>
                                        <tr>
                                            <td>Front-End Developer</td>
                                            <td>Web-Development</td>
                                            <td>Html,Css,Js,ReactJs</td>
                                            <td>$5/Hr</td>
                                        </tr>
                                        <tr>
                                            <td>Front-End Developer</td>
                                            <td>Web-Development</td>
                                            <td>Html,Css,Js,ReactJs</td>
                                            <td>$5/Hr</td>
                                        </tr>
                                        <tr>
                                            <td>Front-End Developer</td>
                                            <td>Web-Development</td>
                                            <td>Html,Css,Js,ReactJs</td>
                                            <td>$5/Hr</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- END DATA TABLE--> */}
                        </div>
                    </div>
                </section>

                <CopyrightDB />
            </div>

        </>
    )
}

export default ServicesList