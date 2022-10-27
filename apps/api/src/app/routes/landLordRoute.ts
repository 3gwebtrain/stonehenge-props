import * as express from 'express';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as nodemailer from 'nodemailer';
import { environment } from '../../environments/environment';
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
    if (!isUserExist.length) {
      return res.status(200).json({ message: 'No user found', success: false });
    }
    return res.json({ landLords: isUserExist, message: 'Landlords fetched successfully', success: true });
  } catch (error) {
    return res.sendStatus(500).json({ message: 'Error fetching landlords', success: false });
  }
});

router.post('/invite', async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const isUserExist = await LandLoardModel.findOne({ email: email });
    if (!isUserExist) {
      return res.status(200).json({ message: 'No landloard found', success: false });
    }
    const token = jwt.sign({ email: email }, environment.secretkey, { expiresIn: '1d' });

    const transport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '3gwebtrain@gmail.com',
        pass: 'xoxtwuzbbyoayjdv',
      },
    });

    const sender = 'StoneHenge';
    const mailOptions = {
      from: sender,
      to: email,
      subject: 'Activate Your Account',
      html: `Click here to <a href="http://localhost:4200/activate/${token}">Activate Your account</a>`,
    };
    transport.sendMail(mailOptions, (error) => {
      if (error) {
        throw new Error(String(error));
      } else {
        return res.json({ message: 'Invite sent successfully', success: true });
      }
    });
  } catch (error) {
    return res.sendStatus(500).json({ message: 'Error inviting landloard', success: false });
  }
});

router.post('/activate', async (req: Request, res: Response) => {
  const { id } = req.body;
  jwt.verify(id, environment.secretkey, (err, decoded) => {
    if (err) {
      return res.json({ message: 'Invalid token', success: false });
    } else {
      const { email } = decoded;
      return res.json({ message: 'Please login', data: { email: email }, success: true });
    }
  });
});

export default router;
