import { Request, Response, Router } from 'express';
import User from '../models/User';

const router = Router();

// get contacts
router.get('/users', async (req: any, res: Response) => {
  try {
    const page = req.query.page || 1;
    const per_page = req.query.per_page || 10;

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(per_page, 10),
    };

    const users = await User.paginate({}, options);

    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message);
    }
  }
});

// get contact
router.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message);
    }
  }
});

// add new contact
router.post('/users', async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message);
    }
  }
});

// edit contact
router.patch('/users/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(`Contact ${user?.id} edited: ok`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message);
    }
  }
});

// delete contact
router.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(`Contact ${user?.id} deleted: ok`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(error.message);
    }
  }
});

export default router;
