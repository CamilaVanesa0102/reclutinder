/* Archivo que contendrá el core de la aplicacion (Visualizacion) */
import React from 'react';
import './main.css';
/* Componente "Card" de UN Super Heroe. Lo usare en la grilla y en el modal. */
import SuperHero from './SuperHero';
/* Importo la informacion estática de los Super Heroes */
import dataCharacters from './characters.js';
/*Importo el Modal, que se muestra al apretar el botón en el navbar */
import Modal from './Modal';
class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         characters:dataCharacters.results
        };
    
      }
      
    render() {
       return <React.Fragment>
         {/*Renderizo el modal, enviandole la informacion de los personajes para que luego se decida qué mostrar. */}
         <Modal characters={this.state.characters}></Modal>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {/*Muestro la grilla de Super Heroes al estilo "Badoo"*/}
                {/*Como state.characters es un Array,puedo utilizar la funcion "map" para iterarlo*/}
                {this.state.characters.map((character,i)=>{
                  /*Esta funcion se ejecutará "n" cantidad de veces. Siendo "n" igual al largo del array de superheroes */
                  /* En este contexto, character es UN superheroe. */
                  /* Se envia al Componente SuperHero el PARAMETRO character. */
                  return (<SuperHero character={character}></SuperHero>)
                })}
              </div>
            </div>
          </div>
       </React.Fragment>
       }
 }
 export default  Main