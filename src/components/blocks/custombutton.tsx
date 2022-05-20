import React from "react";
/* import styled from "styled-components";
import ReactDOM from "react-dom";
import { Custom } from "./custom"; */


const CustomButton = (props) => { 
  
    return ( 
      
        <button className="addButton" onClick={props.onClick}>{props.text}</button> 
      
    ); 
    
  } 
  
  export { CustomButton };