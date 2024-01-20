import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const footerQuickLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },

  {
    display: "Privacy Policy",
    url: "#",
  },

  {
    display: "Return & Refund",
    url: "#",
  },

  {
    display: "Payment Method",
    url: "#",
  },
];

const footerLinks = [
  {
    display: "About Us",
    url: "#",
  },

  {
    display: "Menu",
    url: "#",
  },

  {
    display: "Recipes",
    url: "#",
  },

  {
    display: "Contact",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer" id="footer_bg">
      <div className="footer_top">
        <Container>
          <Row >
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className="d-flex align-items-center gap-1 mb-4">
                  <span>
                    <i class="ri-restaurant-2-line"></i>
                  </span>
                  Sheroo Food
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto atque earum fuga placeat repellat? Debitis.
                </p>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer_link_title">Quick Links</h5>

              <ListGroup>
                {footerQuickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="link_item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="2" md="4" sm="6">
              <h5 className="footer_link_title">Info Links</h5>

              <ListGroup>
                {footerLinks.map((item, index) => (
                  <ListGroupItem key={index} className="link_item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="4" sm="6">
              <h5 className="footer_link_title">Contact</h5>

              <ListGroup>
                <ListGroupItem className="link_item d-flex align-items-center gap-3">
                  <i class="ri-map-pin-line"></i> Satkhira, Bangladesh
                </ListGroupItem>
                <ListGroupItem className="link_item d-flex align-items-center gap-3">
                  <i class="ri-mail-line"></i> ssahed65@gmail.com
                </ListGroupItem>
                <ListGroupItem className="link_item d-flex align-items-center gap-3">
                  <i class="ri-phone-line"></i> +8801791674690
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer_bottom">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                &copy; copyright 2023, developed by Shahroz. All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
