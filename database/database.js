import mongoose from 'mongoose'
import {DB_URI, NODE_ENV} from '../config/env.js'

if(!DB_URI){
  throw new Error('BD URI is not provided!');
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);

    console.log(`Connected to Database!!! mode : ${NODE_ENV}`);
  } catch(error) {
    console.error(`Error connecting to database: ${error}`);
    process.exit(1);
  }
}

export default connectToDatabase;