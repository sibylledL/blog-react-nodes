import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Admin from './components/Admin';
import './App.css';


class App extends Component {



  render() {
    const render =()=>{
      return(

        <div className="accueil">
          <h1>Le Blog</h1>
          <div className="navbar">
          <Link className="link" to='/public'>Voir les articles</Link>
          <Link className="link" to='/admin'>Espace administrateur</Link>
          </div>
        </div>
        // <div className="green">


        //   <ul>
        //     <li><Link to="/public">Home</Link></li>
        //     <li><Link to="/admin">Login</Link></li>
        //   </ul>

          // <div className="annoncebloc">
          //   <h2> Prochaine publications, stay tuned ---->>!!</h2>
          //   // <div>
          //   //   <div ClassName="annonce">
          //   //     <h4>A Pilgrimage to Art Brut’s Austrian Heart</h4>
          //   //     <p>An Austrian museum presents a wide-ranging survey of
          //   //     works made over almost 50 years by residents
          //   //     and other autodidacts associated with the Art Brut
          //   //     Center Gugging, near Vienna...</p>
          //   //   </div>
          //     // <div ClassName="annonce">
          //     //   <h4>The Racial Politics of Boxing</h4>
          //     //   <p>The history of the United States
          //     //   cannot truly be told without acknowledging
          //     // the impact of boxing on society...</p>
          //     // </div>
          //   </div>

      )
    }
    return (
      <div className="App">
        {render()}
      </div>

    )
  }
}

export default App;
