import React from 'react';
import './main.css';
import SuperHero from './SuperHero';
class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          personajes:this.props.characters,
          superMostrado:this.props.characters[0],
          indexMostrado:0
        };
    
      }
      cambiarSuperHeroe=()=>{
        console.log("chau")
        this.setState({superMostrado:this.state.personajes[this.state.indexMostrado+1]})
        this.setState({indexMostrado:this.state.indexMostrado+1})
      }
      
    render() {
       return <React.Fragment>
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content"> 
            
              <div class="carousel-inner">
                <div class="item active">
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