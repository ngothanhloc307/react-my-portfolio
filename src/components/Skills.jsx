import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { DataIcon } from "./data-icon";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <h3 className="language">Programing Language</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={DataIcon[0]} alt="item-img" />
                  <h4>HTML</h4>
                  <p>Advanced</p>
                </div>
                <div className="item">
                  <img src={DataIcon[1]} alt="item-img" />
                  <h4>CSS</h4>
                  <p>Advanced</p>
                </div>
                <div className="item">
                  <img src={DataIcon[2]} alt="item-img" />
                  <div>
                    <h4>Javascript</h4>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <img src={DataIcon[3]} alt="item-img" />
                  <div>
                    <h4>Java</h4>
                    <p>Advanced</p>
                  </div>
                </div>
              </Carousel>
              <h3 className="language">Framework</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={DataIcon[4]} alt="item-img" />
                  <div>
                    <h4>React</h4>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <img src={DataIcon[5]} alt="item-img" />
                  <div>
                    <h4>Spring Boot</h4>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <img src={DataIcon[6]} alt="item-img" />
                  <div>
                    <h4>Tailwind CSS</h4>
                    <p>Basic</p>
                  </div>
                </div>
              </Carousel>
              <h3 className="language">Other</h3>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={DataIcon[7]} alt="item-img" />
                  <div>
                    <h4>SQL Server</h4>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <img src={DataIcon[8]} alt="item-img" />
                  <div>
                    <h4>Mysql</h4>
                    <p>Advanced</p>
                  </div>
                </div>
                <div className="item">
                  <img src={DataIcon[9]} alt="item-img" />
                  <div>
                    <h4>Mongodb</h4>
                    <p>Basic</p>
                  </div>
                </div>
                <div className="item">
                  <img src={DataIcon[10]} alt="item-img" />
                  <div>
                    <h4>Docker</h4>
                    <p>Basic</p>
                  </div>
                </div>
                <div className="item">
                  <img src={DataIcon[11]} alt="item-img" />
                  <div>
                    <h4>Git</h4>
                    <p>Basic</p>
                  </div>
                </div>
                <div className="item">
                  <img src={DataIcon[12]} alt="item-img" />
                  <div>
                    <h4>Microsevice</h4>
                    <p>Basic</p>
                  </div>
                </div>
              </Carousel>
              <h3 className="language">Languages</h3>
              <div className="item-flag">
                <div>
                  <img src={DataIcon[13]} alt="us" />
                  <p>High Intermediate</p>
                </div>
                <div>
                  <img src={DataIcon[14]} alt="jp" />
                  <p>N3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bg-img" />
    </section>
  );
}

export default Skills;
