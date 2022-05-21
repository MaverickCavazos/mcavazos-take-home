import React from "react";
import styled from "styled-components";
import blocks from "../components/blocks";
import { Block } from '../types';


const Container = styled.div`
  overflow-x: scroll;
  position: relative;
`;

const BlockContainer = styled.div`
  margin: 0;
  transition: margin 0.2s ease;

  button {
    opacity: 0;
  }

  &:hover,
  &:focus {
    margin: 15px 0;

    input,
    textarea {
      outline: 1px solid #87eaf2;
    }

    button {
      opacity: 1;
    }
  }
`;


interface SiteProps {
    activeIndex: number;
    blockList: Block[];
    className?: string;
    removeBlock: (index: number) => void;
    setActiveIndex: (index: number) => void;
  }
  
  const Preview: React.FunctionComponent<SiteProps> = ({
    activeIndex,
    blockList,
    className,
    removeBlock,
    setActiveIndex,
  }) => {
    return (
<Container className={className}>
      {blockList.map((block: Block, index: number) => {
        const Component = blocks[block.type];
        return (
          <BlockContainer data-testid="block-container" key={index}>
            
            <Component data={block.configData} />
            
          </BlockContainer>
        );
      })}
    </Container>
    );
}




export default  Preview;

