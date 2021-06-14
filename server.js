const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)

app.get('/',(req,res) => {
    res.send('hello')
})

app.use(express.static(path.resolve('client','public')));
app.use(express.static(path.resolve('client','src',)));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client','public','index.html'));
});

server.listen(5000, () => console.log("server is running on port 5000"))
