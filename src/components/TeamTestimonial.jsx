import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamTestimonial = () => {

  const settings = {

    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation:{
      nextE1: '.swiper-button-next',
      prevE1: '.swiper-button-prev'
    },
    autoplay: {
      delay: 3000,
    },

  }


  return (
    <div>
      <h2 className="testinomal-heading" style={{color: "white"}}> What do they say about us?</h2>
      <p className="testinomal-p">Hear from those who've experienced our excellence firsthand. Our clients' voices echo our dedication, quality, and impact. Discover how we've made a difference and why we're a trusted partner in their success stories.</p>

      <div className="container">
        <Swiper {...settings} modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/haider.JPG" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Muhammad Haider Ashraf</h3>

              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/fizba.JPG" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Fizba Azhar</h3>

              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/ZEE.jpg" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Zeeshan Anayiat</h3>

              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/haider.JPG" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Muhammad Haider Ashraf</h3>

              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/fizba.JPG" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Fizba Azhar</h3>

              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/ZEE.jpg" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Zeeshan Anayiat</h3>

              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/haider.JPG" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Muhammad Haider Ashraf</h3>

              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/fizba.JPG" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Fizba Azhar</h3>

              </div>
            </SwiperSlide >

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/ZEE.jpg" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Zeeshan Anayiat</h3>

              </div>
            </SwiperSlide >

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/haider.JPG" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Muhammad Haider Ashraf</h3>

              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/fizba.JPG" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Fizba Azhar</h3>

              </div>
            </SwiperSlide >

            <SwiperSlide className="swiper-slide">
              <div className="card">
                <img src="/src/assets/images/ZEE.jpg" alt="" srcSet="" />
                <div className="review">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fas fa-star-half"></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis aliquam est, ut libero doloribus</p>
                <h3 style={{fontSize: "20px"}}>Zeeshan Anayiat</h3>

              </div>
            </SwiperSlide >

          </div >
        </Swiper >

      </div >
    </div>
  )
}

export default TeamTestimonial