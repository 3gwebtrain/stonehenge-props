import * as express from 'express';
import { Request, Response } from 'express';
import LandLoardModel from '../models/landLord';
const router = express.Router();

router.post('/add-landloard', async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const isUserExist = await LandLoardModel.findOne({ email: email });
    if (isUserExist) {
      return res.status(200).json({ message: 'User already exist', success: false });
    }

    const newLandLoard = new LandLoardModel(req.body);
    await newLandLoard.save();
    return res.json({ message: 'User created successfully', success: true });
  } catch (error) {
    return res.sendStatus(500).json({ message: 'Error creating user', success: false });
  }
});

router.get('/landloards', async (_, res: Response) => {
  try {
    const isUserExist = await LandLoardModel.find();
    console.log('isUserExist', isUserExist.length);
    if (!isUserExist.length) {
      return res.status(200).json({ message: 'No user found', success: false });
    }
    return res.json({ landLords: isUserExist, message: 'Landlords fetched successfully', success: true });
  } catch (error) {
    return res.sendStatus(500).json({ message: 'Error fetching landlords', success: false });
  }
});

export default router;
