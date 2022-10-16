import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.JPG";
import projImg2 from "../assets/img/project-img2.JPG";
import projImg3 from "../assets/img/project-img3.JPG";
import projImg4 from "../assets/img/project-img4.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Project() {
  const projects = [
    {
      title: "Comfy Store",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://comfy-store-react-ecomerpj.netlify.app/",
    },
    {
      title: "Github Search User",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://react-search-github-users-ngoloc.netlify.app",
    },
    {
      title: "Dash Board Admin",
      description: "Dash Board Admin",
      imgUrl: projImg3,
      link: "https://react-basic-dashboard.netlify.app",
    },
    {
      title: "Food Order",
      description: "Food Ecommerce",
      imgUrl: projImg4,
      link: "https://food-app-react-tailwind-css-demo.netlify.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Not Yet</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Not Yet</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

export default Project;
