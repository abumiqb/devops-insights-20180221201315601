import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Footer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import logo from './logo-ibm.png';
const NavLink = require('react-router-dom').NavLink;
import Routes from './Routes';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <Navbar color="black" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              <img src={logo} alt="" height="50" />

            </NavbarBrand>
            <NavbarToggler />
            <div className="collapse navbar-collapse" id="reactNavbar">

              <NavbarNav className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/">HJEM</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/moterom-info">INFO OM MØTEROM</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/components">INFO OM UTSTILLING</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/javascript">BOOK MØTEROM</NavLink>
                </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to="/javascript">BOOK BRIEFING</NavLink>
                  </NavItem>

              </NavbarNav>

            </div>
          </Navbar>

          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>
          <Footer color="light blue darken-4">
            <p className="footer-copyright mb-0">
              &copy; {(new Date().getFullYear())} <a href="#">IBM Client Center Booking</a>
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
