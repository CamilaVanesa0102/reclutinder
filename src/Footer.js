import React from 'react';
class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
    
      }
      
    render() {
       return <React.Fragment>
 <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
       </React.Fragment>
       }
 }
 export default  Footer