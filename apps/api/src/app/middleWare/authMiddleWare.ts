import * as jwt from 'jsonwebtoken';
import { environment } from '../../environments/environment';

const AuthMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token, environment.secretkey, (error, decoded) => {
      if (error) {
        return res.tatus(400).json({ message: 'Auth failed', success: false });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).json({ message: 'Auth failed', success: false });
  }
};

export default AuthMiddleWare;
