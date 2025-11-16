import express from 'express';
import app from './route.js';
const appServer = express();

appServer.use('/', app);

appServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});