const express = require("express")
const app = express()
const cors = require("cors")
const models = require("./models")
const Op = require("Sequelize").Op

app.use(cors())
app.use(express.json())

// Gets All The Players From The Database
app.get("/", (req, res) => {
  models.Player.findAll({}).then(players => {
    res.json(players)
  })
})

// Adds Player To Database
app.post("/create-player", (req, res) => {
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let teamName = req.body.teamName
  let playerNumber = req.body.playerNumber
  let position = req.body.position
  let fg = req.body.fg
  let threep = req.body.threep
  let ft = req.body.ft
  let reb = req.body.reb
  let ast = req.body.ast
  let blk = req.body.blk
  let stl = req.body.stl
  let pf = req.body.pf
  let to = req.body.to
  let pts = req.body.pts
  let photoUrl = req.body.photoUrl

  let player = models.Player.build({
    firstName: firstName,
    lastName: lastName,
    teamName: teamName,
    playerNumber: playerNumber,
    position: position,
    fg: fg,
    threep: threep,
    ft: ft,
    reb: reb,
    ast: ast,
    blk: blk,
    stl: stl,
    pf: pf,
    to: to,
    pts: pts,
    photoUrl: photoUrl
  }).save()

  res.json({ Sucess: true })
})

//Search Functionality For Player
app.post("/search-player", (req, res) => {
  let searchTextValue = req.body.searchTextValue
  console.log(searchTextValue)

  models.Player.findAll({
    where: {
      [Op.or]: [
        { firstName: searchTextValue },
        { lastName: searchTextValue },
        { teamName: searchTextValue },
        { position: searchTextValue }
      ]
    }
  }).then(players => {
    res.json(players)
  })
})

app.listen(3001, () => {
  console.log("Server is running...")
})
