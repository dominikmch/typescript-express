import { Router, Request, Response, NextFunction } from 'express';

// import routes
import testRoutes from './test.routes';

const router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
  res.header(
    'Access-Controll-Allow-Headers',
    'x-access-token, apikey, x-api-key, Origin, Content-Type, Accept'
  );
  next();
});

router.use(testRoutes);
router.all('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

export default router;
