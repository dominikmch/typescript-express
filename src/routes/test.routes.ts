import { Router, Request, Response } from 'express';

const router = Router();

router
  .get('/test', (req: Request, res: Response) => {
    res.send(`Test controller, show endpoint`);
  })
  .get('/test/:id', (req: Request, res: Response) => {
    res.send(`Test controller, get endpoint`);
  })
  .post('/test/', (req: Request, res: Response) => {
    res.send(`Test controller, post endpoint`);
  })
  .patch('/test/:id', (req: Request, res: Response) => {
    res.send(`Test controller, patch endpoint`);
  })
  .delete('/test/:id', (req: Request, res: Response) => {
    res.send(`Test controller, delete endpoint`);
  });

export default router;
