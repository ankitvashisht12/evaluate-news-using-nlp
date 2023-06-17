const express = require("express")
const dotenv = require('dotenv')
const cors = require("cors")

dotenv.config()

const app = express()
const PORT = 8080;

app.use(cors())
app.use(express.static("dist"))

app.get("/", async function (req, res, next) {
  res.sendFile("dist/index.html")
})

app.post("/analyze", async function (req, res, next) {
  res.json({status: "success", polarity: "neutral", subjectivity: "objective", text: "Hello world"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
