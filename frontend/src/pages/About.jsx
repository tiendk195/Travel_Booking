import { Container, Row, Col } from "reactstrap";
import "../styles/about.css";

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="about">
              <h1 className="mb-3 fw-semibold">About Us</h1>
              <h3 className="mb-4">
                <p>
                  Travel Booking is your ultimate destination for all your
                  travel needs. Whether you're planning a weekend getaway or a
                  month-long adventure, we have everything you need to make your
                  trip unforgettable.
                </p>
                <p>
                  Our platform offers a wide range of services, including
                  booking flights, reserving hotels, and organizing tours and
                  activities. With our user-friendly interface and competitive
                  prices, planning your next vacation has never been easier. At
                  Travel Booking, we believe that every journey should be an
                  experience to remember. Let us help you turn your travel
                  dreams into reality.
                </p>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
