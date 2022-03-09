const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");
socket.on("connect", () => {
  socket.emit("auth:login", { username: "Test5", password: "ABC"}, (test) => {
    console.log(test)
  });
});

socket.on("user:profile", (user) => {
  console.log(user);
});
