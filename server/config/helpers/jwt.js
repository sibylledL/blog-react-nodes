import jwt from 'jsonwebtoken';
import { devConfig } from '../env/dev'

export default {
  issue(payload, expiresIn){
    return jwt.sign(payload, devConfig.secret,{
      expiresIn//duree du tokenA
    });
  },
};
