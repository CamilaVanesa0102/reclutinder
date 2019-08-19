import React from 'react';
import './main.css';
class SuperHero extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          /*Guardamos los  parametros que le llegan al componente.  */
         superHeroe:this.props.character,
         from:this.props.from || ''
        };
    
      }
      meGusta=()=>{
        /*Desde acá llamamos a la funcion cambiarSuperHeroe que llega desde el PADRE. */
        this.props.cambiarSuperHeroe()
      }
      /*Esta funcion es de React sirve para actualizar el estado de los parametros que nos llegan desde los padres. */
      componentWillReceiveProps(nextProps) {
        this.setState({ superHeroe: nextProps.character });  
      }
      
    render() {
       return <React.Fragment>
         <div className={this.state.from=='modal'?"col-md-12":"col-md-4"}>
              <div className="card mb-4 shadow-sm">
                {/*Decidimos que genero es el superheroe. puede ser fem,masc o no tener  uno defindo. */}
              <small className="sex"> 
                      {this.state.superHeroe.gender==2 &&( <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/superhero_emoji-modifier-fitzpatrick-type-1-2_1f9b8-1f3fb_1f3fb.png"></img>)}
                      {this.state.superHeroe.gender==1 &&( <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/man-superhero-light-skin-tone_1f9b8-1f3fb-200d-2642-fe0f.png"></img>)}
                      {this.state.superHeroe.gender!=1 && this.state.superHeroe.gender!=2   &&( <img src="https://img.icons8.com/cotton/2x/gender.png"></img>)}
                    </small>
                    {/*Renderizamos la imagen del superHeroe*/}
                <img src= {this.state.superHeroe.image.screen_url} width="100%" height={225}></img>
                <div className="card-body">
                  <p className="card-title">{this.state.superHeroe.name || '¿NN?'}</p>
                  {/*Algunos super heroes no tienn descripcion*/}
                  <p className="card-text">{this.state.superHeroe.deck || 'No Description'}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <button type="button" className="btn btn-default btn-circle btn-xl">
                        <i className="fas fa-heart-broken"></i>
                    </button>
                    {/*Agregamos evento Click al boton "Me Gusta". */}
                    <button onClick={this.meGusta} type="button" className="btn btn-default btn-circle btn-xl">
                        <i className="fas fa-heart"></i>
                    </button>
                     </div>
                   
                  </div>
                </div>
              </div>
            </div>
       </React.Fragment>
       }
 }
 export default  SuperHero