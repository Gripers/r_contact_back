import { Request, Response, Router } from 'express';
import User from '../models/User';

const router = Router();

router.get('/users&filter', async (req: Request, res: Response) => {
  try {
    const users = await User.findOne(
      { fio: req.query.fio } || { phone_number: req.query.phone_number } || {
          email: req.query.email,
        } || { tags: req.query.tags }
    );
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message);
    }
  }
});

export default router;
