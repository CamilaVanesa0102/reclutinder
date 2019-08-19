import React from 'react';
import './main.css';
import SuperHero from './SuperHero';
import dataCharacters from './characters.js';
import Modal from './Modal';
class Main extends React.Component{
    constructor(props) {
        super(props);
        console.log(dataCharacters)
        this.state = {
         characters:dataCharacters.results
        };
    
      }
      
    render() {
       return <React.Fragment>
         <Modal characters={this.state.characters}></Modal>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {this.state.characters.map((character,i)=>{
              return (<SuperHero character={character}></SuperHero>)
            })}
          </div>
        </div>
      </div>
       </React.Fragment>
       }
 }
 export default  Main