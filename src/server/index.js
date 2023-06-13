const express = require("express")
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = 8080;

app.use(express.static("dist"))

app.get("/", async function (req, res, next) {
  res.sendFile("dist/index.html")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
