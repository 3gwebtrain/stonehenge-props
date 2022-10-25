import * as cors from 'cors';
import * as express from 'express';
import * as dbConfig from './app/config/dbConfig';
import landLoardRoute from './app/routes/landLordRoute';
import userRoute from './app/routes/userRoute';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoute);
app.use('/api/landloard', landLoardRoute);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  dbConfig;
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
