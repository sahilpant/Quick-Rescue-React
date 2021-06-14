const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)

app.get('/',(req,res) => {
    res.send('hello')
})

server.listen(5000, () => console.log("server is running on port 5000"))
