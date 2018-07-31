import express from 'express'
import bodyParser from "body-parser"
import Article from '../models/article'
import cloudinary from 'cloudinary'

const articleRouter = express.Router()

cloudinary.config({
  cloud_name: 'dwec5io9x',
  api_key: '847232866137596',
  api_secret: 'c07se2AWc1O3iahkESbwneMtjxQ'
});

articleRouter.get('/', (req, res) => {
  res.send('ca marche')
})

articleRouter.post('/add', (req, res) => {
  const newArticle = new Article(req.body)
  console.log(req.body);
  if(req.body.img){
    cloudinary.v2.uploader.upload(req.body.img, function(err,result) {
    if(err) console.log(err)
    let secUrl = result.secure_url
    newArticle.img = secUrl
    newArticle.imgId = result.public_id
    });
  }else{
    newArticle.img = "noimage"
    newArticle.imgId="noID"
  }

  if(req.body.isPublished){
    newArticle.isPublihed = true
  }else{
    newArticle.isPublihed = false
  }

  newArticle.save((err,article) => {
  if(err) return console.log(err)
  res.json({message:"ok"})
  ;})
})

articleRouter.get('/articles', (req, res) => {
  Article.find({}, (err,articles)=>{
    if(err) throw err
    res.json({articles});
  })

})

articleRouter.get('/articles/delete/:id',(req, res) => {
  let query = {_id:req.params.id}
  Article.findByIdAndRemove(query,(err) => {
    if(err) res.send(err)
    res.json({message:"supprimé"})
  })
})

articleRouter.get('/articles/:id',(req, res) => {
  Article.find({_id:req.params.id},(err, article) => {
    if(err) res.send(err)
    res.json(article)
  })
})

articleRouter.post('/articles/:id',(req, res) => {
  Article.update({_id:req.params.id},req.body,(err) => {
  if(err) throw err
  res.json({message:"edité"})
})
})
export { articleRouter }
