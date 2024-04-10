import express, { Request, Response } from 'express';
import config from 'config';
import connect from './utils/db/connect';
import routerApi from './routes/api';

const app = express();
const port = config.get<number>('port') || 4000;

app.use('/api', routerApi);

app.listen(port, async () => {
  await connect();
  console.log(`Server running at http://localhost:${port}`);
});
