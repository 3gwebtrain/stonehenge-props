import * as mongoose from 'mongoose';
import { environment } from '../../environments/environment';

mongoose.connect(environment.BASE_URL);
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongodb is connected');
});

connection.on('error', (error) => {
  console.log('Error in MongoDB connection', error);
});

export default mongoose;
