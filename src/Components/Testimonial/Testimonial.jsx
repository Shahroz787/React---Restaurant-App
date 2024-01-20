import React from "react";

import { Container, Row, Col } from "reactstrap";
import "./Testimonial.css";
import Slider from "react-slick";
import testimonialImg from "../../assets/images/review1.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" sm="12" md="10" className="m-auto">
            <div className="slider_wrapper d-flex align-items-center gap-5">
              <div className="slider_content w-50">
                <h2 className="mb-4">What our customers are saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single_testimonial">
                      <p className="review_content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ullam nemo temporibus libero aut? Dolorum hic
                        itaque nulla aliquid numquam nobis impedit dignissimos,
                        fugit fuga rerum quaerat voluptate minus magnam totam.
                      </p>

                      <h6>Arif Billah</h6>
                      <p>Vue Developer</p>
                    </div>
                  </div>

                  <div>
                    <div className="single_testimonial">
                      <p className="review_content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ullam nemo temporibus libero aut? Dolorum hic
                        itaque nulla aliquid numquam nobis impedit dignissimos,
                        fugit fuga rerum quaerat voluptate minus magnam totam.
                      </p>

                      <h6>John Doe</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>

                  <div>
                    <div className="single_testimonial">
                      <p className="review_content">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ullam nemo temporibus libero aut? Dolorum hic
                        itaque nulla aliquid numquam nobis impedit dignissimos,
                        fugit fuga rerum quaerat voluptate minus magnam totam.
                      </p>

                      <h6>Sk Sahin Alam</h6>
                      <p>React Developer</p>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="slider_img w-50">
                <img src={testimonialImg} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
