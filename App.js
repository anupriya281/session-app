import React from 'react';
import Button from './components/Button';

const App = () => {
    return (

        <React.Fragment>
            <h1 
            style={{textAlighn: "center", fontSize: "17px", marginBottom: ""}}>
                    Button Component
            </h1>
            
        <div 
              style = {{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
               }} 
               >
             
           <Button onClick = {() => console.log("Button click seccessfuly")}>Click me!</Button>
           
        </div>
        </React.Fragment>
    );
}; 

export default App;
