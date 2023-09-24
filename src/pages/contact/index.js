import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Button } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {

  const handleClick = () => {
    window.open('https://calendly.com/cshinde2', '_blank');
  
  }

  return (
    <section id="Contact" className="section">
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3 justify-content-center">
          <Col lg="8" className="text-center">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <Col lg="5" className="mb-5 text-center">
            <h3 className="color_sec py-4">Hire me</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
            <Button className="btn ac_btn"  type="submit" onClick={handleClick}>Let's Connect</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
