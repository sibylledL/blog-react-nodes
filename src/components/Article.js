import React, { Component } from 'react'
import ReactQuill from 'react-quill';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Article extends Component{

  constructor(props){
    super(props)
    this.state={
      article:{}
    }
  }

  componentDidMount(){
    this.setState({
      article:this.props.location.state.article
    })
  }

  onChangeTitle=(e) => {
    console.log(e.target.value);
    console.log(this.state.article.title);
    this.setState({
        article:{...this.state.article,
          title:e.target.value        }
    })
  }

  onChangeText=(e) => {
    this.setState({
      article:{
        ...this.state.article,
        text:e
      }
    })
  }

  onChangePublished=(e) => {

    if(this.state.article.isPublished===true){
      this.setState({
        article:{
          ...this.state.article,
          isPublished:false
        }
      })
    }else{
      this.setState({
        article:{
          ...this.state.article,
          isPublished:true
        }
      })
    }

  }
  sendEdit=()=>{
    let self = this

    axios.post(`http://localhost:3004/apiarticle/articles/${this.state.article._id}`, this.state.article)
    .then(function(res){
      console.log(res.status);
      let status = res.status;
      self.setState({status:status})
    })
    .catch(function(err){
      console.log(err);
    })
  }

  Addmodules = {
    modules:{
      toolbar: [
        [{ 'header': [1, 2, false] }],
         ['bold', 'italic', 'underline','strike', 'blockquote'],
         [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
         ['link', 'image'],
         ['clean']
      ]
    }
    }

  render(){
    const render=() => {
      if(this.state.status===200){
          return(
            <Redirect push to="/admin/office/articles"/>
          )
      }else{
          return(
            <div>
              <p>Titre:</p>
              <input className="titleedit" type="text" name="title" value={this.state.article.title} onChange={this.onChangeTitle}></input>
              <p>A été publié:</p>
              <div className="published">
              <input type="checkbox" name="isPublished" checked={this.state.article.isPublished ? true : false} onClick={this.onChangePublished}></input>
              <p>{this.state.article.isPublished ? "oui" : "non"}</p>
              </div>
              <p>Texte:</p>
              <ReactQuill className="textarea" modules={this.Addmodules.modules} name="texte" value={this.state.article.text} onChange={this.onChangeText}/>
              <div className="editCall">
                  <span onClick={this.sendEdit}>EDIT</span>
              </div>
            </div>
          )
      }

    }
    return(

      <div className="edit">
        {render()}
      </div>
    )
  }
}

export default Article
