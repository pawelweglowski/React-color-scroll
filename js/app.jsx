import React from 'react';
import ReactDOM from 'react-dom';
import Colorscroll from './components/colorscroll.jsx';



class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    
        
    render() {
        return (
            <div>
                <Colorscroll />
                
            </div>
            
        )
    }
}
    

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});