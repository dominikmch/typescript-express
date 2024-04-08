import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { add } from './add/add';
// load the environment variables from the .env file
dotenv.config({
  path: '.env',
});

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(
    `Hello, TypeScript Express! ${add(1, 2)}, ${process.env.TEST_VARIABLE}`
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
