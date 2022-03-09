const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");
socket.on("connect", () => {
  socket.emit("auth:login", { username: "Test", password: "Passwort"}, (test) => {
    console.log(test)
  });
})

