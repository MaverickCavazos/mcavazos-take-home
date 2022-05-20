import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import Custom from "./custom";


const CustomButton = (props) => { 
  
    return ( 
      
        <button className="AddButton" onClick={props.onClick}>{props.text}</button> 
      
    ); 
    
  } 
  
  export {CustomButton};