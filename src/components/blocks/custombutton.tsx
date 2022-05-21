import React from "react";



const CustomButton = (props) => { 
  
    return ( 
      
        <button className="addButton" onClick={props.onClick}>{props.text}</button> 
      
    ); 
    
  } 
  
  export { CustomButton };