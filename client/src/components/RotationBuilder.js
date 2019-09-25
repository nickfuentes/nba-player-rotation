import React from "react"
import {
  Container,
  Image,
  ListGroup,
  Row,
  Col,
  Button,
  ProgressBar
} from "react-bootstrap"

function RotationBuilder() {
  return (
    <Container>
      <div className="builder-div">
        <Row>
          <Col>
            <h1>PLAYERS</h1>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <Image
                      className="player-builder-photo"
                      src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254"
                      rounded
                    />
                  </Col>
                  <Col>
                    <h3>Russell Westbrook</h3>
                    <span>Point Guard</span>
                  </Col>
                  <Col>
                    <Button>Remove</Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>
                  <Image
                    className="player-builder-photo"
                    src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254"
                    rounded
                  />
                </Col>
                <Col>
                  <h3>James Harden</h3>
                  <span>Shooting Guard</span>
                </Col>
                <Col>
                  <Button>Remove</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <Image
                    className="player-builder-photo"
                    src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3431.png&w=350&h=254"
                    rounded
                  />
                </Col>
                <Col>
                  <h3>Eric Gordon</h3>
                  <span>Small Forward</span>
                </Col>
                <Col>
                  <Button>Remove</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <Image
                    className="player-builder-photo"
                    src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3033.png&w=350&h=254"
                    rounded
                  />
                </Col>
                <Col>
                  <h3>PJ Tucker</h3>
                  <span>Power Forward</span>
                </Col>
                <Col>
                  <Button>Remove</Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <Image
                    className="player-builder-photo"
                    src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102529.png&w=350&h=254"
                    rounded
                  />
                </Col>
                <Col>
                  <h3>Clint Capela</h3>
                  <span>Center</span>
                </Col>
                <Col>
                  <Button>Remove</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </Col>
          <Col>
            <h1>STATS</h1>
            <h3>Shooting %</h3>
            <ProgressBar now={70} label={`${70}%`} />
            <h3>Defense</h3>
            <ProgressBar now={30} label={`${30}%`} />
            <h3>Free Throw %</h3>
            <ProgressBar now={85} label={`${85}%`} />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default RotationBuilder
