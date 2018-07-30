import React, { Component } from 'react'

class Read extends Component{

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


  render(){

    const renderArticle=() => {
      console.log(this.state);
      if(this.state){
        console.log(this.state);
          return (
            <div className="textread">
                  <h2 className="read">{this.state.article.title}</h2>
                  <div className="read" dangerouslySetInnerHTML={{__html: this.state.article.text}}>
                  </div>
            </div>
          )
         }
      }


    return(
    <div className="divread">{renderArticle()}</div>
    )
  }
}


export default Read
