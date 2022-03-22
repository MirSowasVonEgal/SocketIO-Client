const { io } = require("socket.io-client");
const socket = io("ws://0.0.0.0:3000", {
  auth: {
    token: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZmEyZjVhLTk1MzMtNDE0Zi1iZjBlLTZjMjNjYjFiZjUyNCIsInVzZXJpZCI6IjY4M2Q3YzIxLTE3ZGItNDA5NS1hOThhLTY1NTI4ODg3OTE4MSIsImlwIjoiOjpmZmZmOjEyNy4wLjAuMSIsIm1ldGhvZCI6ImFjY2VzcyIsImlhdCI6MTY0NzI2NzQyNiwiZXhwIjoxNjQ3MzEwNjI2fQ.MWkZPG5nH8_2wHQVEOJj4-tre7Xx0W08WeEQwQoKzlPCtYQ39olrUZYIigWnBkmOMPDNENvviH_Pt5TM4TxnqA"  }
});
socket.on("connect", () => {
  /*socket.emit("auth:login", { email: "timootten@icloud.com", password: "Timo0580" }, (test) => {
    
  });*/
  /*
  socket.emit("auth:register", { email: "timotten@icloud.com", password: "Timo0580", username: "MirSowasVonEgal" }, (test) => {
    console.log(test)
  })
  socket.emit('ts3audiobot:get', { _id: '902121b6-a55f-4695-8984-9167397ffaf3' }, (output) => {
    console.log(output);
  })
  socket.emit('ts3audiobot:start', { _id: '902121b6-a55f-4695-8984-9167397ffaf3' }, (output) => {
    console.log(output);
  })
  socket.emit('ts3audiobot:update', { _id: '902121b6-a55f-4695-8984-9167397ffaf3', path: 'connect.name', value: 'MSVE' }, (output) => {
    console.log(output);
  })
  socket.emit('ts3audiobot:stop', { _id: '902121b6-a55f-4695-8984-9167397ffaf3' }, (output) => {
    console.log(output);
  })
  socket.emit('ts3audiobot:create', { display_name: "Testing" }, (output) => {
    console.log(output);
  })
  socket.emit('ts3audiobot:update', { _id: 'fc5137f2-4f0a-42eb-b102-ecc33d9849da', path: 'connect.address', value: 'ts.ShadeMC.de' }, output => {
    console.log(output);
  })
  
  socket.emit('ts3audiobot:delete', { _id: 'fc5137f2-4f0a-42eb-b102-ecc33d9849da' }, (output) => {
    console.log(output);
  })


  socket.emit('ts3audiobot:create', { display_name: "Test", name: "Test2", address: "ts.ShadeMC.de" }, (output) => {
    setTimeout(() => {

     
      
    }, 2000)
  })
  socket.emit('ts3audiobot:list', (output) => {
    output.forEach(bot => {
      socket.emit('ts3audiobot:delete', bot, (output) => {
        console.log(output);X
      })
    })
  })*/
  socket.emit('ts3audiobot:play', { _id: 'f9cfb71b-9d08-4372-b24b-29e579494086', song: 'https://www.youtube.com/watch?v=RkkdYdWMfQ0' }, (output) => {
    console.log(output);
  })
  
});

socket.on("user:profile", (user) => {
  console.log(user);
});

socket.on("ts3audiobot:list", (ts3audiobots) => {
  console.log(ts3audiobots)
})
