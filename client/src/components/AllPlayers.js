import React, { useState, useEffect } from "react"
import axios from "axios"
import { Form, Button, Card, Table, Container, Row, Col } from "react-bootstrap"

function AllPlayers() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    getPlayers()
  })

  const getPlayers = () => {
    axios.get("http://localhost:3001/").then(response => {
      setPlayers(response.data)
    })
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <Form>
                <Form.Group>
                  <Form.Label>Search for your players</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        {players.map(player => {
          return (
            <div>
              <Row>
                <Col>
                  <div className="player-info">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={player.photoUrl} />
                      <Card.Body>
                        <Card.Title>
                          <span>
                            {player.firstName} {player.lastName}
                          </span>
                        </Card.Title>
                        <Card.Text>{player.teamName}</Card.Text>
                        <Card.Text>#{player.playerNumber}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col>
                  <div className="stat-chart">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>FG%</th>
                          <th>3P%</th>
                          <th>FT%</th>
                          <th>REB</th>
                          <th>AST</th>
                          <th>BLK</th>
                          <th>STL</th>
                          <th>PF</th>
                          <th>TO</th>
                          <th>PTS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>{player.fg}</td>
                          <td>{player.threep}</td>
                          <td>{player.ft}</td>
                          <td>{player.reb}</td>
                          <td>{player.ast}</td>
                          <td>{player.blk}</td>
                          <td>{player.stl}</td>
                          <td>{player.pf}</td>
                          <td>{player.to}</td>
                          <td>{player.pts}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Button>Add Player</Button>
                  </div>
                </Col>
              </Row>
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default AllPlayers
