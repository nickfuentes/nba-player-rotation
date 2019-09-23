const express = require("express")
const app = express()
const cors = require("cors")
const models = require("./models")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json("Index Route Working!")
})

app.post("/add-player", (req, res) => {
  let firstName = req.body.firstName

  let player = models.Player.build({
    title: title,
    genre: genre,
    author: author,
    year: year,
    imageURL: imageURL
  }).save()

  res.json({ Sucess: true })
})

app.listen(3001, () => {
  console.log("Server is running...")
})
