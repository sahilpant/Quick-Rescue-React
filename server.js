const { deepEqual } = require("assert")
const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

const job = new CronJob(
	'*/5 * * * *',
	async () => {
		console.log("");
	},
	undefined,
	true,
	'Asia/Kolkata',
  );
  job.start();

const users = {}

io.on("connection", (socket) => {
	if(!users[socket.id]) {
		users[socket.id] = socket.id;
	}

	socket.emit("me", socket.id)
	console.log(users);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
		delete(users[socket.id])
		console.log(users)
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

server.listen(5000, () => console.log("server is running on port 5000"))
