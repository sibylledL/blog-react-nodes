import mongoose from 'mongoose'

const Schema = mongoose.Schema

const articleSchema = new Schema({
  title:{type:String, required:true},
  text:{type:String, required:true},
  date: {type: Date, default:Date.now},
  img: {type: String},
  imgId:{type:String},
  isPublished:{type:Boolean, default:false}
})

export default mongoose.model("Article", articleSchema)
