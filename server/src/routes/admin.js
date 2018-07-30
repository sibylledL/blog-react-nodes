import express from 'express'
import { Admin } from '../models/admin'
import bodyParser from "body-parser"
import bcrypt from 'bcryptjs';
import passport from 'passport';
import jwt from '../../config/helpers/jwt'

const adminRouter = express.Router();


adminRouter.get('/',(req, res) => {
  res.send('welcome')
})

adminRouter.post('/signup',(req, res) => {
  let newAdmin = new Admin(req.body)
  bcrypt.genSalt(10,function(err, salt){
    bcrypt.hash(newAdmin.password, salt, function(err, hash){
      newAdmin.password = hash
      newAdmin.save((err, admin) => {
      if(err) (err)
      res.json({admin})
    })
    })
  });
});

// adminRouter.get('/login',(req, res) => {
//   const token = jwt.issue({id:admin._id}, "1d");
//   return res.json({token})
// })

adminRouter.post('/login', passport.authenticate('local-signin'),
  // successRedirect:'/',
  // failureRedirect:'/admin/login',
  // failureFlash:true
  function(req, res) {
    // const token = jwt.issue({id:admin._id}, "1d");
    // return res.json({token})
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.sendStatus(200);
})

export { adminRouter }
