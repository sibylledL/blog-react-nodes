import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Public extends Component{

  constructor(props){
    super(props)
    this.state={
      articles:""
    }
  }

  getArticles=() => {
    fetch('http://localhost:3004/apiarticle/articles')
    .then(res => res.json())
    .then(res => {
      this.setState({
        articles:res.articles
      })
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  componentDidMount(){
    this.getArticles()
  }


  render(){

      const renderArticles =() => {
        console.log(this.state);
      if(this.state.articles){
        return this.state.articles.map((article) => {
        return (
          <div className="showarticle">
            <h4>{article.title}</h4>
            <div className="articlepublic" dangerouslySetInnerHTML={{__html: article.text}}>
            </div>
            <div className="lire">
            <span>
              <Link className="link" to={{pathname:`/public/${article._id}`, state:{article}}}>Lire la suite</Link>
            </span>
            </div>
        </div>
        )
        })
      }
    }



    return(
      <div className="public">
        <h3>Articles A la Une</h3>
        <div className="render">{renderArticles()}</div>
      </div>
    )
  }
}

export default Public
