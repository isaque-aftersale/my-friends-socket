import 'dotenv/config';
import './router/socket.routes';

import { httpServer } from './server';

httpServer.listen(3003);
