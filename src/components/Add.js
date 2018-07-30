import React, { Component } from 'react'
import axios from 'axios'
import ReactQuill from 'react-quill';
// import { Redirect } from 'react-router-dom';

class Add extends Component{

  constructor(props){
    super(props)
    this.state={
        title:"",
        date:"",
        text:"",
        img:"",
        isPublished:false
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
    axios.post('http://localhost:3004/apiarticle/add', this.state)
    .then(function(response){
      console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });

    }

    componentDidMount(){
      this.addArticle()
    }


  render(){

    return(
      <div>
          <div>
            Ajouter un article
          </div>
          <div>
            <form method="POST" action="/apiarticle/add" encType='multipart/form-data'>
              <p>Titre</p>
              <input type="text" name="title" onChange={this.onChange}></input>
              <p>Date:</p>
              <input type="date" name="date" onChange={this.onChange}></input>
              <p>Texte</p>
              <ReactQuill className="textarea" name="texte" onChange={this.onChangeText}/>
              <p>illus</p>
              <input type="file" name="img" onChange={this.onChangeImg}></input>
              <p>publier ?</p>
              <input type="checkbox" name="isPublished" onClick={this.isPublished}></input>
              <button value="SUBMIT" onClick={this.addArticle}>ADD</button>
            </form>
          </div>
      </div>
    )
  }
}

export default Add
