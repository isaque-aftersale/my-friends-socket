import { io } from '../server';

io.on("connection", (socket) => {
  console.log("Connection ok");

  io.on('send', (data) => {
    console.log(data)
  } )
});
