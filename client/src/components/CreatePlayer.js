import React, { useState } from "react"
import { Form, Col, Button, Container } from "react-bootstrap"
import axios from "axios"

function CreatePlayer() {
  const [playerFirstName, setPlayerFirstName] = useState("")
  const [playerLastName, setPlayerLastName] = useState("")
  const [playerTeamName, setPlayerTeamName] = useState("")
  const [playerNumber, setPlayerNumber] = useState(0)
  const [playerPosition, setPlayerPosition] = useState("")
  const [playerFG, setPlayerFG] = useState(0)
  const [playerThreeP, setPlayerThreeP] = useState(0)
  const [playerFT, setPlayerFT] = useState(0)
  const [playerREB, setPlayerREB] = useState(0)
  const [playerAST, setPlayerAST] = useState(0)
  const [playerBLK, setPlayerBLK] = useState(0)
  const [playerSTL, setPlayerSTL] = useState(0)
  const [playerPF, setPlayerPF] = useState(0)
  const [playerTO, setPlayerTO] = useState(0)
  const [playerPTS, setPlayerPTS] = useState(0)
  const [playerPhotoUrl, setPlayerPhotoUrl] = useState("")

  const firstNameHandleTextBoxChange = e => {
    setPlayerFirstName(e.target.value)
  }

  const lastNameHandleTextBoxChange = e => {
    setPlayerLastName(e.target.value)
  }

  const teamNameHandleTextBoxChange = e => {
    setPlayerTeamName(e.target.value)
  }

  const playerNumberHandleTextBoxChange = e => {
    setPlayerNumber(e.target.value)
  }

  const positionHandleTextBoxChange = e => {
    setPlayerPosition(e.target.value)
  }

  const fgHandleTextBoxChange = e => {
    setPlayerFG(e.target.value)
  }

  const threePHandleTextBoxChange = e => {
    setPlayerThreeP(e.target.value)
  }

  const ftHandleTextBoxChange = e => {
    setPlayerFT(e.target.value)
  }

  const rebHandleTextBoxChange = e => {
    setPlayerREB(e.target.value)
  }

  const astHandleTextBoxChange = e => {
    setPlayerAST(e.target.value)
  }

  const blkHandleTextBoxChange = e => {
    setPlayerBLK(e.target.value)
  }

  const stlHandleTextBoxChange = e => {
    setPlayerSTL(e.target.value)
  }

  const pfHandleTextBoxChange = e => {
    setPlayerPF(e.target.value)
  }

  const toHandleTextBoxChange = e => {
    setPlayerTO(e.target.value)
  }

  const ptsHandleTextBoxChange = e => {
    setPlayerPTS(e.target.value)
  }

  const photoUrlHandleTextBoxChange = e => {
    setPlayerPhotoUrl(e.target.value)
  }

  const handleSaveCreatedPlayer = () => {
    axios.post("http://localhost:3001/create-player", {
      firstName: playerFirstName,
      lastName: playerLastName,
      teamName: playerTeamName,
      playerNumber: playerNumber,
      position: playerPosition,
      fg: playerFG,
      threep: playerThreeP,
      ft: playerFT,
      reb: playerREB,
      ast: playerAST,
      blk: playerBLK,
      stl: playerSTL,
      pf: playerPF,
      to: playerTO,
      pts: playerPTS,
      photoUrl: playerPhotoUrl
    })
  }

  return (
    <div>
      <Container>
        <Form className="create-player-form">
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                onChange={firstNameHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                onChange={lastNameHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Team Name</Form.Label>
              <Form.Control
                name="teamName"
                type="text"
                onChange={teamNameHandleTextBoxChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Player Number</Form.Label>
              <Form.Control
                name="playerNumber"
                type="text"
                onChange={playerNumberHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Position</Form.Label>
              <Form.Control
                name="position"
                type="text"
                onChange={positionHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>FG%</Form.Label>
              <Form.Control
                name="fg"
                type="text"
                onChange={fgHandleTextBoxChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>3P%</Form.Label>
              <Form.Control
                name="threep"
                type="text"
                onChange={threePHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>FT%</Form.Label>
              <Form.Control
                name="ft"
                type="text"
                onChange={ftHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>REB</Form.Label>
              <Form.Control
                name="reb"
                type="text"
                onChange={rebHandleTextBoxChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>AST</Form.Label>
              <Form.Control
                name="ast"
                type="text"
                onChange={astHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>BLK</Form.Label>
              <Form.Control
                name="blk"
                type="text"
                onChange={blkHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>STL</Form.Label>
              <Form.Control
                name="stl"
                type="text"
                onChange={stlHandleTextBoxChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>PF</Form.Label>
              <Form.Control
                name="pf"
                type="text"
                onChange={pfHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>TO</Form.Label>
              <Form.Control
                name="to"
                type="text"
                onChange={toHandleTextBoxChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>PTS</Form.Label>
              <Form.Control
                name="pts"
                type="text"
                onChange={ptsHandleTextBoxChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                name="photoUrl"
                type="text"
                onChange={photoUrlHandleTextBoxChange}
              />
            </Form.Group>
          </Form.Row>

          <Button
            variant="primary"
            type="submit"
            onClick={handleSaveCreatedPlayer}
          >
            Create Player
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default CreatePlayer
