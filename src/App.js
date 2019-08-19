import React from 'react';
/* 
  Estilos que aplican en la aplicacion completamente.
*/
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
function App() {
  return (
  
    <React.Fragment>
      
      {/* 
        Componente del NavBar
      */}
      <Header></Header>
      {/* 
        Componente del Main. Aca va a estar toda la aplicacion.
      */}
      <Main></Main> 
      {/* 
        Componente del Footer.
      */}
      <Footer></Footer>
      {/* 
        React.Fragment ==> Esto sirve para guardar en una "CAJA" grande todos los componentes JSX del componente.
        Entonces, no generamos impacto en el HTML FINAL.
      */}
      </React.Fragment>
  );
}

export default App;
