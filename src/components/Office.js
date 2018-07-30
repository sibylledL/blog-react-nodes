import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

class Office extends Component{

  render(){

    const renderAdd = () => {
      if(this.props.location.state.status===200){
        return(
          <div className='officeCmd'>
              <h2>Le Back Office</h2>
              <ul className="linkCmd">
                <li><Link className="linkoffice" to='/admin/office/articles'>Tous les articles</Link></li>
                <li><Link className="linkoffice" to='/admin/office/add'>Ajouter un article</Link></li>
              </ul>
          </div>
        )
      }else{
        return(
          <div>
          Espace réservé à l'admin
          </div>
        )
    }
  }
    return(
      <div className="office">
        {renderAdd()}
      </div>

    )
  }
}

export default Office
