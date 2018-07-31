import React, { Component } from 'react'
import axios from 'axios'
import ReactQuill, { Toolbar } from 'react-quill';
import { Redirect } from 'react-router-dom';

class Add extends Component{

  constructor(props){
    super(props)
    this.state={
        title:"",
        date:"",
        text:"",
        img:"",
        isPublished:false,
        status:""
    }
  }

  isPublished=(e)=> {
    console.log(this.state.isPublished)

    if(this.state.isPublished === "true"){
        this.setState({
            isPublished:"false"
        })
    }else{
      this.setState({
          isPublished:"true"
    })
  }
  }

onChange=(e)=>{
  console.log(e.target.name);
  this.setState({
    [e.target.name]:e.target.value
  })
}

onChangeText=(e) => {
this.setState({
  text:e
})
}

onChangeImg=(e)=> {
  let path = e.target.value
  this.setState({
    img: path.substr(12)
  })
}



  addArticle=(e)=>{
    let self = this
    axios.post('http://localhost:3004/apiarticle/add', this.state)
    .then(function(response){
      console.log(response.status);
      if(response.status === 200){
        let status = response.status
        self.setState({status: response.status})
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    }

    componentDidMount(){
      this.addArticle()
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

    const renderArticle=()=>{
      if(this.state.status===200){
        return(
          <Redirect push to='/admin/office/articles'/>
        )
      }else{
        return(
          <div>
              <div>
                Ajouter un article
              </div>
              <div>
                  <p>Titre</p>
                  <input type="text" name="title" onChange={this.onChange}></input>
                  <p>Date:</p>
                  <input type="date" name="date" onChange={this.onChange}></input>
                  <p>Texte</p>
                  <ReactQuill theme="snow" modules={this.Addmodules.modules} className="textarea" name="texte" onChange={this.onChangeText}/>
                  <p>illus</p>
                  <input type="file" name="img" onChange={this.onChangeImg}></input>
                  <p>publier ?</p>
                  <input type="checkbox" name="isPublished" onClick={this.isPublished}></input>
                  <button onClick={this.addArticle}>ADD</button>
              </div>
          </div>
        )
      }
    }

    return(
      <div>
        {renderArticle()}
      </div>
    )
  }
}

export default Add
