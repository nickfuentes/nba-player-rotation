import React, { Component } from "react"
import "../App.css"
import { Navbar, Nav, Image } from "react-bootstrap"

export class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              className="nba-logo"
              src="https://www.iba-munich.com/wp-content/uploads/2019/05/nba-logo-vector-01-128x128.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/add-player">Add Player</Nav.Link>
              <Nav.Link href="/favorites">Favorite Rotations</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/sign-out">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Image
          src="https://www.nba.com/rockets/sites/rockets/files/201920-0148_on_sale-web1148x442.jpg?cw=1140&ch=442&w=1148&h=442&x=4&y=0"
          fluid
        />
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
