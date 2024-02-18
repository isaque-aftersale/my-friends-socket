import { Server } from "socket.io";

export const io = new Server({
  cors: {
    allowedHeaders: ["Access-Control-Allow-Headers: all"],
  },
});

io.on("connection", (socket) => {
  console.log("Connection ok");
  
  io.emit("test", "This is message test");
});

io.listen(3003);
