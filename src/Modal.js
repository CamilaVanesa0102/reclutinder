import React from 'react';
import './main.css';
/* Importo el Componente de SuperHero. 
Este va a servir para Renderizar la carta de UN superHeroe. */
import SuperHero from './SuperHero';

class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          /* Seteo en personajes el parametro que llega llamado "characters", que tiene la informacion de TODOS los  superHeroes */
          personajes:this.props.characters,
          /* Creo variables utiles para renderizar el cambio de superheroes en el modal.*/
          superMostrado:this.props.characters[0],
          indexMostrado:0
        };
    
      }
      /*Funcion que manejará el boton "like" para luego cambiar de superheroe, que, luego, en el Componente, será "actualizado" para renderizar el nuevo.*/
      /*Esta funcion será ejecutada desde el componente Hijo (SuperHero) */
      cambiarSuperHeroe=()=>{
        this.setState({superMostrado:this.state.personajes[this.state.indexMostrado+1]})
        this.setState({indexMostrado:this.state.indexMostrado+1})
      }
      
    render() {
       return <React.Fragment>
         {/* Modal de Bootstrap. */}
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content"> 
            
              <div class="carousel-inner">
                <div class="item active">
                  {/*
                   En la variable character viajará la informacion necesaria para renderizar el superHeroe.
                   en cambiarSuperHeroe enviamos la funcion que declaramos arriba para manejar el cambio de super heroe.
                   en la variable from le especificamos "desde donde" renderizamos el superheroe.
                   */}
                <SuperHero character={this.state.superMostrado} cambiarSuperHeroe={this.cambiarSuperHeroe} from={"modal"}></SuperHero>
                </div>
                
              </div>
            
            </div>
          </div>
        </div>
       </React.Fragment>
       }
 }
 export default  Modal