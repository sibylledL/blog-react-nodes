import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import Article from './Article'
// import Moment from 'react-moment';
// import 'moment/locale/fr';
class Articles extends Component {


  constructor(props){
    super(props)
    this.state={
      articles:[]
    }
  }

  showArticles=() => {
      fetch('http://localhost:3004/apiarticle/articles')//connexion grace au fetch à cette url
      .then(res => res.json())//tu veux recup le json puis on veut faire une action
      .then(body => {//body est un objet qui va remplir le tableau movie; tout ce qu'il fetch est dans body
        this.setState({
          articles:body.articles
        });
        console.log("state", this.state.articles)
      })
      .catch(err => {throw err})
   }


  componentDidMount(){
    this.showArticles()
  }

  // tryEdit=(e) => {
  //   console.log(e.target.id);
  // }


  deleteArticle=(e) => {
    let targetId = e.target.id
    fetch(`http://localhost:3004/apiarticle/articles/delete/${targetId}`)
    this.showArticles()
  }

  render(){


    const articles = this.state.articles.map((article) => {
      return(
        <div className="article">
             <h3>{article.title}</h3>
             <div id="inline">
                 <p>Crée le : {article.date}</p>
                 <p>Article publié : {article.isPublished ? "oui" : "non"}</p>
                 <span id={article._id}>

                 <Link className="link"to={{pathname:`/admin/office/articles/${article._id}`, state:{article}}}>EDIT</Link>

                 </span>
                 <span id={article._id} onClick={this.deleteArticle}>DELETE</span>
             </div>
             <div className="texte" dangerouslySetInnerHTML={{__html: article.text}}>
             </div>
        </div>
      )
    })

    return(
      <div className="office">
        <h3 className="officetitle">Liste des articles</h3>
        <div>
            {articles}
        </div>
      </div>
    )
  }
}

export default Articles
