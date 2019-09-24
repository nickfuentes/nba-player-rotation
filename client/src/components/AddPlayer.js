import React from "react"
import { Form, Col, Button, Container } from "react-bootstrap"

function AddPlayer() {
  return (
    <div>
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Team Name</Form.Label>
              <Form.Control name="teamName" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Player Number</Form.Label>
              <Form.Control name="playerNumber" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Position</Form.Label>
              <Form.Control name="position" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>FG%</Form.Label>
              <Form.Control name="fg" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>3P%</Form.Label>
              <Form.Control name="threep" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>FT%</Form.Label>
              <Form.Control name="ft" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>REB</Form.Label>
              <Form.Control name="reb" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>AST</Form.Label>
              <Form.Control name="ast" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>BLK</Form.Label>
              <Form.Control name="blk" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>STL</Form.Label>
              <Form.Control name="stl" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>PF</Form.Label>
              <Form.Control name="pf" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>TO</Form.Label>
              <Form.Control name="to" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>PTS</Form.Label>
              <Form.Control name="pts" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control name="photoUrl" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Create Player
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AddPlayer
