import mongoose from 'mongoose';
import config from 'config';

async function connect(): Promise<void> {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    console.log('Connected to DB');
  } catch (error) {
    console.log('Could not connect to db', error);
    process.exit(1);
  }
}

export default connect;
