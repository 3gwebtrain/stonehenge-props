import * as bcrypt from 'bcrypt';
import * as express from 'express';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { environment } from '../../environments/environment';
import AuthMiddleWare from '../middleWare/authMiddleWare';
import { UserModel } from '../models/userModel';
const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const { password, email } = req.body;
  try {
    const isUserExist = await UserModel.findOne({ email: email });
    if (isUserExist) {
      return res.status(200).json({ message: 'User already exist', success: false });
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    req.body.password = hashPassword;
    const newUser = new UserModel(req.body);
    await newUser.save();
    return res.json({ message: 'user created successfully', success: true });
  } catch (error) {
    return res.sendStatus(500).json({ message: 'Error creating user', success: false });
  }
});

router.post('/admin-login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await await UserModel.findOne({ email: email });

    if (!user) {
      return res.status(200).json({ message: 'User does not exist', success: false });
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(200).json({ message: 'Email / Password incorrect', success: false });
    }
    const token = jwt.sign({ id: user._id }, environment.secretkey, { expiresIn: '1d' });
    return res.status(200).json({ message: 'Login successful', success: true, data: token });
  } catch (error) {
    return res.send(500).json({ message: 'Error loggin in', success: false, error });
  }
});

router.post('/get-admin-info-by-id', AuthMiddleWare, async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const user = await UserModel.findOne({ _id: userId }).select('-password');

    if (!user) {
      return res.send(200).json({ message: 'User does not exist', success: false });
    } else {
      res.status(200).send({ success: true, data: user });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error getting user info', success: false, error });
  }
});

export default router;
