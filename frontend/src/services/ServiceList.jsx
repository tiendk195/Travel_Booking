import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Travelling",
    desc: "Traveling helps us to share the world with each other",
  },
  {
    imgUrl: guideImg,
    title: "Travel Guide",
    desc: "Traveling helps us to share the world with each other",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Traveling helps us to share the world with each other",
  },
];
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
