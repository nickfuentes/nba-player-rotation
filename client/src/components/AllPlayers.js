import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Form,
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Jumbotron
} from "react-bootstrap"

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

  const addPlayer = () => {
    console.log("Adding Player To Builder Component!")
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <Jumbotron fluid>
                <Container>
                  <h1>Search For A Player</h1>
                  <p>
                    You can type in your players name or search by team name.
                  </p>
                  <Form className="search-input">
                    <Form.Group>
                      <Form.Control placeholder="Search For Players" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Container>
              </Jumbotron>
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
                        <Card.Text>
                          <strong>Team:</strong> {player.teamName}
                        </Card.Text>
                        <Card.Text>
                          <strong>Position:</strong> {player.position}
                        </Card.Text>
                        <Card.Text>
                          <strong>Jersey #: </strong>
                          {player.playerNumber}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col>
                  <div className="stat-chart">
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>STATS</th>
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
                          <td>Regular Season</td>
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
                    <Button
                      className="add-player-button"
                      onClick={() => {
                        addPlayer()
                      }}
                    >
                      Add Player
                    </Button>
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
