import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route, Redirect } from 'react-router-dom'
import Office from './Office'
import history from '../history'

class Admin extends Component{

  constructor(props){
    super(props)//paramètre pour accéder à un contenu privé
    this.state = {
      pseudo:"",
      password:"",
      status:""
    }
  }

  getPassword=(e)=>{
    let newValue = e.target.value
    this.setState({
      password:newValue
    })
  }

  getPseudo=(e)=>{
    let newValue = e.target.value
    this.setState({
      pseudo:newValue
    })
  }

  adminSignin=(e)=>{
     e.preventDefault()

    let payload={
      "pseudo":this.state.pseudo,
      "password":this.state.password
    };

    let self = this;

    axios.post('http://localhost:3004/apiadmin/login', payload)
    .then(function(response){
      console.log(response);
      if(response.status == 200){
        console.log(response.status);
        let status = response.status
        self.setState({status: response.status})
      }else{
        alert('infos uncorrect')
      }
      }).catch(function (error) {
          console.log(error);
  });
}


  render(){

      const renderLogin = () => {
          if(this.state.status===200){
            return(

            <Redirect push to={{pathname: '/admin/office', state:{status:this.state.status}}}/>
            )
          }else{
            return(
                <div className="welcome">
                  <h2>Welcome</h2>
                  <h3>Please login to enter the admin space ---></h3>
                  <div className='column'>

                      <input name='pseudo' type="text" placeholder="Pseudo" onChange={this.getPseudo}></input>
                      <input name="password" type="password" placeholder="Password" onChange={this.getPassword}></input>
                      <p onClick={this.adminSignin}>ENTER</p>

                  </div>

                </div>
          )
        }
    }

      return(
        <div className="green">
          {renderLogin()}
        </div>
      )

}
}

export default Admin
