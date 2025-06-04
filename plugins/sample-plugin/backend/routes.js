import { Router } from 'express';

const router = Router();

router.get('/example', (req, res) => {
  res.json({ plugin: 'sample', message: 'Hello from sample plugin' });
});

export default router;
