import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/blood.JPG";
import projImg2 from "../assets/img/expense.png";
import projImg3 from "../assets/img/java.png";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      description: "Full Stack Development",
      imgUrl: projImg1,
    },
    {
      description: "MERN Stack Project",
      imgUrl: projImg2,
    },
    {
      description: "Design & Development",
      imgUrl: projImg3,
    },
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <div class="rowMain">
                      <figure>
                      <img src={projImg1} alt="" class="myImg"></img>
                      <figcaption class="captionc"> Full Stack Development </figcaption>
                      </figure>
                      <div class="columnMain">
                   
                    </div>                     
                      <br></br> <br></br> <br></br>
                      <figure>
                      <img src={projImg2} alt="" class="myImg"></img>
                      <figcaption class="captionc"> MERN Stack </figcaption>
                      </figure>
                      <div class="columnMain">
                      
                    </div>  
                      <br></br> <br></br> <br></br>
                      <figure>
                      <img src={projImg3} alt="" class="myImg"></img>
                      <figcaption class="captionc"> 
                        Application Design and Development</figcaption>
                      </figure>
                      <div class="columnMain">
               
                    </div>  
                    </div>

                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
