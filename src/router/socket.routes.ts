import { io } from '../server';

io.on("connection", (socket) => {
  console.log("Connected -> " + socket.id);

  socket.on('create chat', (data) => {
    socket.join('')
  })

  socket.on("disconnect", (data) => {
    console.log("Disconected -> " + data);
  });
});
