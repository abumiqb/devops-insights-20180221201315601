import React from 'react';
const NavLink = require('react-router-dom').NavLink;
import './HomePage.css';
import { EdgeHeader, FreeBird, Container, Col, Row, CardBody, Fa } from 'mdbreact';


class HomePage extends React.Component {
  render(){
    return(
      <div>
        <EdgeHeader color="light blue darken-4" />
        <FreeBird>
          <Row>
            <Col md="10" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <CardBody>
                <h2 className="h2-responsive"><strong>IBM Client Center Booking</strong></h2>

                <Row>

                  <Col md="3" className="text-center home-feature-box">
                    <NavLink to="/css">
                      <Fa icon="code" className="blue-text" />
                      <span>Info om møterom</span>
                    </NavLink>
                  </Col>

                  <Col md="3" className="text-center home-feature-box">
                    <NavLink to="/components">
                      <Fa icon="code" className="blue-text" />
                      <span>Info om utstilling</span>
                    </NavLink>
                  </Col>

                  <Col md="3" className="text-center home-feature-box">
                    <NavLink to="/javascript">
                      <Fa icon="code" className="green-text" />
                      <span>Boom møterom</span>
                    </NavLink>
                  </Col>

                  <Col md="3" className="text-center home-feature-box">
                    <NavLink to="/javascript">
                      <Fa icon="code" className="green-text" />
                      <span>Book briefing</span>
                    </NavLink>
                  </Col>

                  <Col md="3" className="text-center home-feature-box">
                  </Col>


                </Row>
              </CardBody>
            </Col>
          </Row>
        </FreeBird>
      </div>
    );
  }
}

export default HomePage;
