import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import 'dotenv/config'
import cors from 'cors'
import volleyball from 'volleyball'
const { SERVER_PORT, DB_Url} = process.env

const app = express()

import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import passport from "passport";
require('../config/passport');
app.use(session({secret:"secret"}))
app.use(passport.initialize());
app.use(passport.session())


app.use(cors())

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(volleyball)


mongoose.connection.on('connected',() => {
  console.log(`[MongoDb] is running on port 27017`);
})
mongoose.connect(DB_Url);

app.get('/',(req, res) => {
  res.send("ca marche")
});

import { adminRouter } from './routes/admin.js'
app.use('/apiadmin', adminRouter)

import { articleRouter } from './routes/article.js'
app.use('/apiarticle', articleRouter)


app.listen(SERVER_PORT,() => {
  console.log(`Server running on ${SERVER_PORT}`);
})
