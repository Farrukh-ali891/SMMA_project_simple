import React from 'react'
import CopyrightDB from './CopyrightDB'
import { Link } from 'react-router-dom'

const DashBoardServices = () => {
  return (
    <>
      <div className="page-wrapper">
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
                        <li className="list-inline-item">Services</li>
                      </ul>
                    </div>
                    <form className="au-form-icon--sm" action="" method="post">
                      <input className="au-input--w300 au-input--style2" type="text" placeholder="Search for Services.." />
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


          {/* <!-- WELCOME--> */}
          <section className="welcome p-t-10">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="title-4">Services
                    {/* <!-- <span>Courses</span> --> */}
                  </h1>
                  <hr className="line-seprate" />
                </div>
              </div>
            </div>
          </section>
          {/* <!-- END WELCOME--> */}



          <section className="container" id="boxes">
            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/digital marketing.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/brand marketing.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Brand Marketing</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/contentcreater.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Content Creator</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/e mail marketing.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">E-Mail Marketing</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/fiverr.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Fiver</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/googl ads.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Google Ads</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/our team.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Our Team</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/popular.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Popularity</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/upworknew.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Up Work</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>

            <div className="card db-card" style={{ width: "30rem" }}>
              <img src="src/assets/images/services/youtube.png" className="card-img-top db-services" alt="Video Image" />
              <div className="card-body db-card-body">
                <h5 className="card-title">Youtube</h5>
                <p className="card-text">Customers: 400</p>
                <p className="card-text">Rating: 4.9/5</p>
                <p className="card-text">Price: 5$/Hr</p>
                {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
                <br />
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                  <i className="ri-pencil-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                  <i className="ri-delete-bin-7-fill"></i></span>
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More">
                  <i className="ri-more-fill"></i></span>
              </div>
            </div>





          </section>

          <section className="container" >
            <nav aria-label="Page navigation example" id="custom-page">
              <ul className="pagination">
                <li className="page-item db-page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item db-page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item db-page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item db-page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item db-page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </section>






          <CopyrightDB />
        </div>
      </div>
    </>
  )
}

export default DashBoardServices