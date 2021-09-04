import React, { useState, render } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carosela.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div id="flat_div"></div>
        <Carousel.Caption>
          <h2 id="title">Welcome to SmartHouse!</h2>
          <p id="info">
            SmartHouse is a smart device management Web App for you to control
            and manage your intelligent home products easier and to live
            smarter.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div id="flat_div"></div>

        <Carousel.Caption>
          <h2 id="title">About Us:</h2>
          <p id="info">
            We are two study partners who were assigned a project task in pairs,
            programming a SmartHouse web App, so we sat down a lot, and thought
            about how to program it in the most efficient and beautiful way,
            hope you like it!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div id="flat_div"></div>

        <Carousel.Caption>
          <h5 ID="title">
            Now you can add a room and Connect the appliances inside him!
          </h5>
          <Link id="link" to="/AddRoom">
            <div id="wrapper">
              <button
                type="button"
                id="BU_addRoom"
                class="btn btn-primary btn-lg"
              >
                Add Room
              </button>
            </div>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
