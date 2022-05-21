import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";

//add new block imports
import { CustomButton } from "../components/blocks/custombutton";
import { Custom } from "../components/blocks/custom";
import Preview from './preview';
import { createPortal } from "react-dom";



import blocks from "../components/blocks";


const Container = styled.div`
  webkit-box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
    0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2),
    0 18px 46px 6px rgba(16, 22, 26, 0.2);
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderSection = styled.div`
  background: #243b53;
  margin-bottom: 10px;
  padding: 20px 20px;
`;

const HeaderText = styled.h2`
  color: #f0f4f8;
  margin: 0;
`;

const BlockSection = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  background-color: #9fb3c8 !important;
  background-image: none !important;
  box-shadow: none !important;
  color: #102a43 !important;
  font-weight: bold;
  margin: 5px auto;
  padding: 10px;
  text-transform: capitalize;
  width: 80%;
`;



const PreviewButton = styled(Button)`
  background-color: #9fb3c8 !important;
  background-image: none !important;
  box-shadow: none !important;
  color: #102a43 !important;
  font-weight: bold;
  margin: 5px auto;
  padding: 10px;
  text-transform: capitalize;
  width: 30%;
  float:right;
`;

//Render new window for preview

const RenderInWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  useEffect(() => {
    
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    
    if (container) {
     
      newWindow.current = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );
      
      newWindow.current.document.body.appendChild(container);

      
      const curWindow = newWindow.current;

     
      return () => curWindow.close();
    }
  }, [container]);

  return container && createPortal(props.children, container);
};


interface BlockPickerProps {
  addBlock: (blockName: string,) => void;
  className?: string;
}

const BlockPicker: React.FunctionComponent<BlockPickerProps> = ({ addBlock, className }) => {

  //lines for the add new block feature
  const [components, setComponents] = useState([]); 
  

  //add new custom component to blocks
  function addComponent() { 
    setComponents([...components, <Custom/>]) 
  } 
  
  //state for renderwindow
  const [open, setOpen] = useState();

   
  
  return (
    <Container className={className}>
      <HeaderSection>
        <HeaderText> Add a Block </HeaderText>
        
        
        <PreviewButton onClick={() => setOpen(true)} text="Preview">
          {open && <RenderInWindow>Page preview</RenderInWindow>}
        </PreviewButton>
      </HeaderSection>
      <BlockSection>
        <CustomButton onClick={addComponent} text="Add Block"></CustomButton>
        {components.map((blockName: string, index: number) => ( 
        <StyledButton  
        text="Custom"
        data-testid={`block-add-${blockName}`} 
        key={index} 
        onClick={() => addBlock(blockName)}></StyledButton> ))} 
        {/* End of feature lines */}
        {Object.keys(blocks).map((blockName: string, index: number) => (
          <StyledButton
            data-testid={`block-add-${blockName}`}
            key={index}
            onClick={() => addBlock(blockName)}
          >
            {blockName}
          </StyledButton>
        ))}
      </BlockSection>
    </Container>
  );
};

export default BlockPicker;
