import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

const AdminSchema = new Schema({
  pseudo:{type:String,required:true},
  name:{type:String,required:true},
  lastname:{type:String,required:true},
  email:{type:String,required:true},
  avatar:{type:String,required:true},
  password:{type:String,required:true}
})

const Admin = mongoose.model('Admin', AdminSchema)
export { Admin }
