import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/effect-fade/effect-fade.scss";
import "swiper/modules/thumbs/thumbs.min.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function SwiperComponent() {
  return (
    <div>
      {" "}
      <div className="swiper-container hero-slider">
        <div className="swiper-wrapper pms-x">
          <Swiper
            // spaceBetween={30}
            centeredSlides={true}
            effect={"fade"}
            navigation={false}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide hero-content-wrap">
                <img
                  src="images/kj3.jpeg"
                  alt=""
                />
                <div className="hero-content-overlay position-absolute w-100 h-100">
                  <div className="container h-100">
                    <div className="row h-100">
                      <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                        <header className="entry-header">
                          <h1>Donate</h1>
                          <h4>Children's Development</h4>
                        </header>
                        <div className="entry-content mt-4">
                          <p>Help children your donation impact lives</p>
                        </div>
                        <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                          <a href="#" className="btn pmxs gradient-bg mr-2">
                            Donate Now
                          </a>
                          <Link to="/about" className="btn pmxs orange-border">
                            Read More
                          </Link>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide hero-content-wrap">
                <img
                  src="images/kj2.jpeg"
                  alt=""
                />

                <div className="hero-content-overlay position-absolute w-100 h-100">
                  <div className="container h-100">
                    <div className="row h-100">
                      <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                        <header className="entry-header">
                          <h1>Donate</h1>
                          <h4>Environmental Issues</h4>
                        </header>
                        <div className="entry-content mt-4">
                          <p>
                            {" "}
                            Advocating and creating awareness on the protection
                            of our natural environment
                          </p>
                        </div>
                        <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                          <a href="#" className="btn pmxs gradient-bg mr-2">
                            Donate Now
                          </a>
                          <Link to="/about" className="btn pmxs orange-border">
                            Read More
                          </Link>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide hero-content-wrap">
                <img
                  src="images/kj1.jpeg"
                  alt=""
                />
                <div className="hero-content-overlay position-absolute w-100 h-100">
                  <div className="container h-100">
                    <div className="row h-100">
                      <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                        <header className="entry-header">
                          <h1>Donate</h1>
                          <h4> Health and Education </h4>
                        </header>
                        <div className="entry-content mt-4">
                          <p>
                            {" "}
                            Educating the society about HIV/AIDS and other
                            emerging diseases and addressing sigmatisation{" "}
                          </p>
                        </div>
                        <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                          <a href="#" className="btn pmxs gradient-bg mr-2">
                            Donate Now
                          </a>
                          <Link to="/about" className="btn pmxs orange-border">
                            Read More
                          </Link>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
