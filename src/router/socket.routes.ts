import uuid from 'uuid';

import { io } from '../server';

io.on("connection", (socket) => {
  console.log("Connected -> " + socket.id);

  socket.on("user-create-connection", ({ id, name }) => {
    socket.emit("user-create-connection", {
      id: socket.id,
      connected: true,
      name,
    });
  });

  socket.on("user-save-contact", (contact) => {
    socket.emit("user-save-contact", contact);
  });

  socket.on("disconnect", (data) => {
    console.log("Disconected -> " + data);
  });
});
