import * as bcrypt from 'bcrypt';
import * as express from 'express';
import { Request, Response } from 'express';
import { UserModel } from '../models/userModel';
const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const { password, email } = req.body;
  try {
    const isUserExist = await UserModel.findOne({ email: email });
    if (isUserExist) {
      res.sendStatus(500).json({ message: 'User already exist', success: false });
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    req.body.password = hashPassword;
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json({ message: 'user created successfully', success: true });
  } catch (error) {
    res.sendStatus(500).json({ message: 'Error creating user', success: false });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
  } catch (error) {}
});

export default router;
