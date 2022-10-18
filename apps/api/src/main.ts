import * as express from 'express';
import * as dbConfig from './app/config/dbConfig';
const app = express();

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  dbConfig;
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
