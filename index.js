const express = require("express")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 3000
const app = express()

app.set("json spaces", 2)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post("/v1/create", (req, res) => {
  res.jsonp({
    status: "success",
    data: req.body,
  })
})

app.listen(PORT, function() {
  console.log(`Express server listening on port ${PORT}`)
})
