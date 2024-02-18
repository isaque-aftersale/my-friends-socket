import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

export const app = express();

export const httpServer = createServer(app);

export const io = new Server(httpServer, {
  cors: {
    allowedHeaders: ["Access-Control-Allow-Headers: all"],
  },
});

app.use(
  cors({
    allowedHeaders: ["Access-Control-Allow-Headers: all"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "all ok",
  });
});

io.on("connection", (socket) => {
  console.log("Connection ok");
});

httpServer.listen(3003);
