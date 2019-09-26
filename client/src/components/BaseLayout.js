import React, { Component } from "react"
import "../App.css"
import { Navbar, Nav, Image, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavLink className="navbar-brand" to="/">
            <img
              className="nba-logo"
              src="https://www.iba-munich.com/wp-content/uploads/2019/05/nba-logo-vector-01-128x128.png"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" className="nav-link">
                Search For Players
              </NavLink>
              <NavLink to="/rotation-builder" className="nav-link">
                Rotation Builder
              </NavLink>
              <NavLink to="/create-player" className="nav-link">
                Create Player
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/sign-out">Sign Out</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Image
            className="banner-img"
            src="https://www.nba.com/rockets/sites/rockets/files/201920-0148_on_sale-web1148x442.jpg?cw=1140&ch=442&w=1148&h=442&x=4&y=0"
            fluid
          />
        </Container>
      </div>
    )
  }
}

export class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}
