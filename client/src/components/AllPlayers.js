import React, { useState, useEffect } from "react"
import axios from "axios"
import "../App.css"
import {
  Form,
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Jumbotron,
  Image,
  ProgressBar,
  ListGroup
} from "react-bootstrap"

function AllPlayers() {
  const [players, setPlayers] = useState([])
  const [searchTextValue, setSearchTextvalue] = useState("")
  const [playerInBuilderSlot, setPlayerInBuilderSlot] = useState([])

  useEffect(() => {
    getPlayers()
  }, [])

  // Request To Get All The Players From Server
  const getPlayers = () => {
    axios.get("http://localhost:3001/").then(response => {
      setPlayers(response.data)
    })
  }

  const removePlayerFromBuilder = () => {
    console.log("Deleting Player From Builder!")
  }

  const searchHanldeTextBoxChange = e => {
    setSearchTextvalue(e.target.value)
  }

  const searchForPlayers = () => {
    axios
      .post("http://localhost:3001/search-player", {
        searchTextValue: searchTextValue
      })
      .then(response => {
        setPlayers(response.data)
      })
  }

  const addPlayerToBuilder = e => {
    axios
      .post("http://localhost:3001/picked-player", {
        id: e.target.dataset.id
      })
      .then(response => {
        setPlayerInBuilderSlot(playerInBuilderSlot.concat(response.data))
      })
  }

  return (
    <div>
      <Container>
        <div className="builder-div">
          <Row>
            <Col>
              <h1>PLAYERS</h1>
              {playerInBuilderSlot.map(player => {
                return (
                  <div>
                    <ListGroup>
                      <ListGroup.Item>
                        <Row>
                          <Col>
                            <Image
                              className="player-builder-photo"
                              src={player.photoUrl}
                              rounded
                            />
                          </Col>
                          <Col>
                            <h3>
                              {player.firstName} {player.lastName}
                            </h3>
                            <span>{player.position}</span>
                          </Col>
                          <Col>
                            <Button
                              onClick={() => {
                                removePlayerFromBuilder()
                              }}
                            >
                              Remove
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                )
              })}
            </Col>
            <Col>
              <h1>STATS</h1>
              <h3>Shooting %</h3>
              <ProgressBar now={70.3} label={`${70.3}%`} />
              <h3>Defense</h3>
              <ProgressBar now={30} label={`${30}%`} />
              <h3>Free Throw %</h3>
              <ProgressBar now={85} label={`${85}%`} />
            </Col>
          </Row>
        </div>
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
                      <Form.Control
                        placeholder="Search For Players"
                        name="firstName"
                        type="text"
                        onChange={searchHanldeTextBoxChange}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      onClick={() => {
                        searchForPlayers()
                      }}
                    >
                      Search
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
                      data-id={player.id}
                      onClick={e => {
                        addPlayerToBuilder(e)
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
