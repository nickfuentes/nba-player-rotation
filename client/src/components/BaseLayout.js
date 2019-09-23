import React, { Component } from "react"
import "../App.css"
import { Navbar, Nav } from "react-bootstrap"

export class Menu extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">NBA Player Rotation</Navbar.Brand>
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
