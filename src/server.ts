import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import api_routes from './router/api.routes';

export const app = express();

export const httpServer = createServer(app);

const cors_setting = {
  allowedHeaders: ["Access-Control-Allow-Headers: all"],
};

export const io = new Server(httpServer, {
  cors: cors_setting,
});

app.use(cors(cors_setting));
app.use(express.json());
app.use(api_routes);
